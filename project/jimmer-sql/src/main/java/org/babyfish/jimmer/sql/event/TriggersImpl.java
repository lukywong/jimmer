package org.babyfish.jimmer.sql.event;

import org.babyfish.jimmer.meta.ImmutableProp;
import org.babyfish.jimmer.meta.ImmutableType;
import org.babyfish.jimmer.meta.TargetLevel;
import org.babyfish.jimmer.meta.impl.RedirectedProp;
import org.babyfish.jimmer.runtime.ImmutableSpi;
import org.babyfish.jimmer.sql.Triggers;
import org.babyfish.jimmer.sql.meta.Column;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import java.util.concurrent.CopyOnWriteArrayList;

public class TriggersImpl implements Triggers {

    private final ConcurrentMap<ImmutableType, CopyOnWriteArrayList<EntityListener<ImmutableSpi>>> entityTableListenerMultiMap =
            new ConcurrentHashMap<>();

    private final ConcurrentMap<ImmutableProp, CopyOnWriteArrayList<AssociationListener>> associationListenerMultiMap =
            new ConcurrentHashMap<>();

    @Override
    public void addEntityListener(ImmutableType immutableType, EntityListener<ImmutableSpi> listener) {
        entityTableListenerMultiMap
                .computeIfAbsent(
                        immutableType,
                        it -> new CopyOnWriteArrayList<>()
                )
                .add(listener);
    }

    @Override
    public void removeEntityListener(ImmutableType immutableType, EntityListener<ImmutableSpi> listener) {
        entityTableListenerMultiMap
                .computeIfAbsent(
                        immutableType,
                        it -> new CopyOnWriteArrayList<>()
                )
                .remove(listener);
    }

    @Override
    public void addAssociationListener(ImmutableProp prop, AssociationListener listener) {
        if (!prop.getDeclaringType().isEntity()) {
            throw new IllegalArgumentException("\"" + prop + "\" is not declared in entity");
        }
        associationListenerMultiMap
                .computeIfAbsent(
                        prop,
                        it -> new CopyOnWriteArrayList<>()
                )
                .add(listener);
    }

    @Override
    public void removeAssociationListener(ImmutableProp prop, AssociationListener listener) {
        if (!prop.getDeclaringType().isEntity()) {
            throw new IllegalArgumentException("\"" + prop + "\" is not declared in entity");
        }
        associationListenerMultiMap
                .computeIfAbsent(
                        prop,
                        it -> new CopyOnWriteArrayList<>()
                )
                .remove(listener);
    }

    @Override
    public void fireEntityTableChange(Object oldRow, Object newRow, Object reason) {
        if (oldRow == null && newRow == null) {
            return;
        }
        if (oldRow != null && !(oldRow instanceof ImmutableSpi)) {
            throw new IllegalArgumentException("oldRow must be immutable");
        }
        if (newRow != null && !(newRow instanceof ImmutableSpi)) {
            throw new IllegalArgumentException("newRow must be immutable");
        }
        EntityEvent<ImmutableSpi> event = new EntityEvent<>((ImmutableSpi)oldRow, (ImmutableSpi) newRow, reason);
        List<EntityListener<ImmutableSpi>> listeners =
                entityTableListenerMultiMap.get(event.getImmutableType());
        Throwable throwable = null;
        ImmutableType superType = event.getImmutableType().getSuperType();
        if (superType != null) {
            if (listeners == null) {
                listeners = new ArrayList<>();
            } else {
                listeners = new ArrayList<>(listeners);
            }
            while (superType != null) {
                List<EntityListener<ImmutableSpi>> superListeners =
                        entityTableListenerMultiMap.get(superType);
                if (superListeners != null) {
                    listeners.addAll(superListeners);
                }
                superType = superType.getSuperType();
            }
        }
        if (listeners != null && !listeners.isEmpty()) {
            for (EntityListener<ImmutableSpi> listener : listeners) {
                try {
                    listener.onChange(event);
                } catch (RuntimeException | Error ex) {
                    if (throwable == null) {
                        throwable =ex;
                    }
                }
            }
        }
        ImmutableType type = event.getImmutableType();
        for (ImmutableProp prop : type.getProps().values()) {
            if (prop.getStorage() instanceof Column && prop.isAssociation(TargetLevel.ENTITY)) {
                ChangedRef<Object> changedRef = event.getChangedFieldRef(prop);
                if (changedRef != null) {
                    ChangedRef<Object> fkRef = changedRef.toIdRef();
                    throwable = fireForeignKeyChange(
                            RedirectedProp.source(prop, type),
                            event.getId(),
                            fkRef.getOldValue(),
                            fkRef.getNewValue(),
                            reason,
                            throwable
                    );
                }
            }
        }
        if (throwable instanceof RuntimeException) {
            throw (RuntimeException)throwable;
        }
        if (throwable != null) {
            throw (Error)throwable;
        }
    }

    private Throwable fireForeignKeyChange(
            ImmutableProp prop,
            Object childId,
            Object oldFk,
            Object newFk,
            Object reason,
            Throwable throwable
    ) {
        ImmutableProp inverseProp = RedirectedProp.source(prop.getOpposite(), prop.getTargetType());
        List<AssociationListener> listeners = associationListenerMultiMap.get(prop);
        List<AssociationListener> inverseListeners = associationListenerMultiMap.get(inverseProp);
        if (listeners != null && !listeners.isEmpty()) {
            AssociationEvent e = new AssociationEvent(prop, childId, oldFk, newFk, reason);
            for (AssociationListener listener : listeners) {
                try {
                    listener.onChange(e);
                } catch (RuntimeException | Error ex) {
                    if (throwable == null) {
                        throwable = ex;
                    }
                }
            }
        }
        if (inverseListeners != null && !inverseListeners.isEmpty()) {
            if (oldFk != null) {
                AssociationEvent e = new AssociationEvent(inverseProp, oldFk, childId, null, reason);
                for (AssociationListener inverseListener : inverseListeners) {
                    try {
                        inverseListener.onChange(e);
                    } catch (RuntimeException | Error ex) {
                        if (throwable == null) {
                            throwable = ex;
                        }
                    }
                }
            }
            if (newFk != null) {
                AssociationEvent e = new AssociationEvent(inverseProp, newFk, null, childId, reason);
                for (AssociationListener inverseListener : inverseListeners) {
                    try {
                        inverseListener.onChange(e);
                    } catch (RuntimeException | Error ex) {
                        if (throwable == null) {
                            throwable = ex;
                        }
                    }
                }
            }
        }
        return throwable;
    }

    @Override
    public void fireMiddleTableDelete(ImmutableProp prop, Object sourceId, Object targetId, Object reason) {
        ImmutableProp mappedBy = prop.getMappedBy();
        if (mappedBy != null) {
            fireMiddleTableDeleteImpl(mappedBy, targetId, sourceId, reason);
        } else {
            fireMiddleTableDeleteImpl(prop, sourceId, targetId, reason);
        }
    }

    private void fireMiddleTableDeleteImpl(ImmutableProp prop, Object sourceId, Object targetId, Object reason) {
        ImmutableProp inverseProp = RedirectedProp.source(prop.getOpposite(), prop.getTargetType());
        List<AssociationListener> listeners = associationListenerMultiMap.get(prop);
        List<AssociationListener> inverseListeners = associationListenerMultiMap.get(inverseProp);
        Throwable throwable = null;
        if (listeners != null && !listeners.isEmpty()) {
            AssociationEvent e = new AssociationEvent(prop, sourceId, targetId, null, reason);
            for (AssociationListener listener : listeners) {
                try {
                    listener.onChange(e);
                } catch (RuntimeException | Error ex) {
                    if (throwable == null) {
                        throwable = ex;
                    }
                }
            }
        }
        if (inverseListeners != null && !inverseListeners.isEmpty()) {
            AssociationEvent e = new AssociationEvent(inverseProp, targetId, sourceId, null, reason);
            for (AssociationListener inverseListener : inverseListeners) {
                try {
                    inverseListener.onChange(e);
                } catch (RuntimeException | Error ex) {
                    if (throwable == null) {
                        throwable = ex;
                    }
                }
            }
        }
        if (throwable instanceof RuntimeException) {
            throw (RuntimeException)throwable;
        }
        if (throwable != null) {
            throw (Error)throwable;
        }
    }

    @Override
    public void fireMiddleTableInsert(ImmutableProp prop, Object sourceId, Object targetId, Object reason) {
        ImmutableProp mappedBy = prop.getMappedBy();
        if (mappedBy != null) {
            fireMiddleTableInsertImpl(mappedBy, targetId, sourceId, reason);
        } else {
            fireMiddleTableInsertImpl(prop, sourceId, targetId, reason);
        }
    }

    private void fireMiddleTableInsertImpl(ImmutableProp prop, Object sourceId, Object targetId, Object reason) {
        ImmutableProp inverseProp = RedirectedProp.source(prop.getOpposite(), prop.getTargetType());
        List<AssociationListener> listeners = associationListenerMultiMap.get(prop);
        List<AssociationListener> inverseListeners = associationListenerMultiMap.get(inverseProp);
        Throwable throwable = null;
        if (listeners != null && !listeners.isEmpty()) {
            AssociationEvent e = new AssociationEvent(prop, sourceId, null, targetId, reason);
            for (AssociationListener listener : listeners) {
                try {
                    listener.onChange(e);
                } catch (RuntimeException | Error ex) {
                    if (throwable == null) {
                        throwable = ex;
                    }
                }
            }
        }
        if (inverseListeners != null && !inverseListeners.isEmpty()) {
            AssociationEvent e = new AssociationEvent(inverseProp, targetId, null, sourceId, reason);
            for (AssociationListener inverseListener : inverseListeners) {
                try {
                    inverseListener.onChange(e);
                } catch (RuntimeException | Error ex) {
                    if (throwable == null) {
                        throwable = ex;
                    }
                }
            }
        }
        if (throwable instanceof RuntimeException) {
            throw (RuntimeException)throwable;
        }
        if (throwable != null) {
            throw (Error)throwable;
        }
    }

    @Override
    public void fireAssociationEvict(ImmutableProp prop, Object sourceId, Object reason) {
        List<AssociationListener> listeners = associationListenerMultiMap.get(prop);
        Throwable throwable = null;
        if (listeners != null && !listeners.isEmpty()) {
            AssociationEvent e = new AssociationEvent(prop, sourceId, reason);
            for (AssociationListener listener : listeners) {
                try {
                    listener.onChange(e);
                } catch (RuntimeException | Error ex) {
                    if (throwable == null) {
                        throwable = ex;
                    }
                }
            }
        }
        if (throwable instanceof RuntimeException) {
            throw (RuntimeException)throwable;
        }
        if (throwable != null) {
            throw (Error)throwable;
        }
    }
}
