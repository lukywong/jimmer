package org.babyfish.jimmer.sql.cache;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.babyfish.jimmer.lang.OldChain;
import org.babyfish.jimmer.meta.ImmutableProp;
import org.babyfish.jimmer.meta.ImmutableType;
import org.babyfish.jimmer.meta.TargetLevel;
import org.babyfish.jimmer.meta.TypedProp;
import org.babyfish.jimmer.meta.impl.RedirectedProp;
import org.babyfish.jimmer.sql.runtime.EntityManager;
import org.babyfish.jimmer.sql.ImmutableProps;
import org.babyfish.jimmer.sql.Triggers;
import org.babyfish.jimmer.sql.ast.table.Table;
import org.babyfish.jimmer.sql.event.binlog.BinLogParser;
import org.babyfish.jimmer.sql.runtime.ScalarProvider;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

public class CacheConfig {

    private final EntityManager entityManager;

    private final Map<ImmutableType, Cache<?, ?>> objectCacheMap =
            new LinkedHashMap<>();

    private final Map<ImmutableProp, Cache<?, ?>> propCacheMap =
            new LinkedHashMap<>();

    private CacheOperator operator;

    private ObjectMapper binLogObjectMapper;

    private CacheAbandonedCallback abandonedCallback;

    public CacheConfig(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @OldChain
    public CacheConfig setCacheFactory(CacheFactory cacheFactory) {
        if (entityManager == null) {
            throw new IllegalStateException("EntityManager must be set before set cache factory");
        }
        if (entityManager.getAllTypes().isEmpty()) {
            throw new IllegalStateException("vararg \"entityTypes\" cannot be empty");
        }
        if (cacheFactory == null) {
            throw new IllegalArgumentException("cacheFactory cannot bee null");
        }
        for (ImmutableType type : entityManager.getAllTypes()) {
            if (type.isEntity()) {
                if (!objectCacheMap.containsKey(type)) {
                    Cache<?, ?> objectCache = cacheFactory.createObjectCache(type);
                    if (objectCache != null) {
                        if (objectCache instanceof Cache.Parameterized<?, ?>) {
                            throw new IllegalStateException(
                                    "CacheFactory returns illegal cache for \"" +
                                            type +
                                            "\", object cache cannot be parameterized"
                            );
                        }
                        objectCacheMap.put(type, objectCache);
                    }
                }
                for (ImmutableProp prop : type.getProps().values()) {
                    if (prop.isAssociation(TargetLevel.ENTITY) || prop.hasTransientResolver()) {
                        ImmutableProp redirectedProp = RedirectedProp.source(prop, type);
                        if (!propCacheMap.containsKey(redirectedProp)) {
                            Cache<?, ?> propCache =
                                    redirectedProp.hasTransientResolver() ?
                                            cacheFactory.createResolverCache(redirectedProp) : (
                                            redirectedProp.isReferenceList(TargetLevel.ENTITY) ?
                                                    cacheFactory.createAssociatedIdListCache(redirectedProp) :
                                                    cacheFactory.createAssociatedIdCache(redirectedProp)
                                    );
                            if (propCache != null) {
                                propCacheMap.put(redirectedProp, propCache);
                            }
                        }
                    }
                }
            }
        }
        return this;
    }

    @OldChain
    public <T> CacheConfig setObjectCache(
            Class<T> type,
            Cache<?, T> cache
    ) {
        if (cache instanceof Cache.Parameterized<?, ?>) {
            throw new IllegalArgumentException(
                    "Object cache cannot be parameterized cache"
            );
        }
        ImmutableType immutableType = ImmutableType.get(type);
        objectCacheMap.put(immutableType, LocatedCacheImpl.unwrap(cache));
        return this;
    }

    @OldChain
    public <ST extends Table<?>> CacheConfig setAssociatedIdCache(
            TypedProp.Reference<?, ?> prop,
            Cache<?, ?> cache
    ) {
        return setAssociatedIdCache(prop.unwrap(), cache);
    }

    @OldChain
    public CacheConfig setAssociatedIdCache(
            ImmutableProp prop,
            Cache<?, ?> cache
    ) {
        if (!prop.isReference(TargetLevel.ENTITY)) {
            throw new IllegalArgumentException("The prop \"" + prop + "\" is not entity reference");
        }
        if (!prop.getDeclaringType().isEntity()) {
            throw new IllegalArgumentException("The prop \"" + prop + "\" is not declared in entity");
        }
        propCacheMap.put(prop, LocatedCacheImpl.unwrap(cache));
        return this;
    }

    @OldChain
    public <T, ST extends Table<?>, TT extends Table<T>> CacheConfig setAssociatedIdListCache(
            TypedProp.ReferenceList<?, ?> prop,
            Cache<?, List<?>> cache
    ) {
        return setAssociatedIdListCache(prop.unwrap(), cache);
    }

    @OldChain
    public CacheConfig setAssociatedIdListCache(
            ImmutableProp prop,
            Cache<?, List<?>> cache
    ) {
        if (!prop.isReferenceList(TargetLevel.ENTITY)) {
            throw new IllegalArgumentException("The prop \"" + prop + "\" is not entity list");
        }
        if (!prop.getDeclaringType().isEntity()) {
            throw new IllegalArgumentException("The prop \"" + prop + "\" is not declared in entity");
        }
        propCacheMap.put(prop, LocatedCacheImpl.unwrap(cache));
        return this;
    }

    @OldChain
    public CacheConfig setResolverCache(
            TypedProp<?, ?> prop,
            Cache<?, ?> cache
    ) {
        return setResolverCache(prop.unwrap(), cache);
    }

    @OldChain
    public CacheConfig setResolverCache(
            ImmutableProp prop,
            Cache<?, ?> cache
    ) {
        if (!prop.hasTransientResolver()) {
            throw new IllegalArgumentException("The prop \"" + prop + "\" is transient property with resolver");
        }
        if (!prop.getDeclaringType().isEntity()) {
            throw new IllegalArgumentException("The prop \"" + prop + "\" is not declared in entity");
        }
        propCacheMap.put(prop, LocatedCacheImpl.unwrap(cache));
        return this;
    }

    @OldChain
    public CacheConfig setCacheOperator(CacheOperator operator) {
        this.operator = operator;
        return this;
    }

    @OldChain
    public CacheConfig setBinLogObjectMapper(ObjectMapper objectMapper) {
        this.binLogObjectMapper = objectMapper;
        return this;
    }

    @OldChain
    public CacheConfig setAbandonedCallback(CacheAbandonedCallback callback) {
        this.abandonedCallback = callback;
        return this;
    }

    Caches build(EntityManager entityManager, Triggers triggers, Map<Class<?>, ScalarProvider<?, ?>> scalarProviderMap) {
        for (ImmutableProp prop : propCacheMap.keySet()) {
            if (prop.isAssociation(TargetLevel.ENTITY) && !objectCacheMap.containsKey(prop.getTargetType())) {
                throw new IllegalStateException(
                        "The cache for association property \"" +
                                prop +
                                "\" is configured but there is no cache for the target type \"" +
                                prop.getTargetType() +
                                "\""
                );
            }
        }
        return new CachesImpl(
                entityManager,
                triggers,
                objectCacheMap,
                propCacheMap,
                operator,
                new BinLogParser(scalarProviderMap, binLogObjectMapper),
                abandonedCallback
        );
    }
}
