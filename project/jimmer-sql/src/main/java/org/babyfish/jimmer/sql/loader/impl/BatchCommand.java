package org.babyfish.jimmer.sql.loader.impl;

import org.babyfish.jimmer.meta.ImmutableProp;
import org.babyfish.jimmer.runtime.ImmutableSpi;
import org.babyfish.jimmer.sql.JSqlClient;
import org.babyfish.jimmer.sql.ast.Executable;
import org.babyfish.jimmer.sql.ast.table.Table;
import org.babyfish.jimmer.sql.fetcher.FieldFilter;

import java.sql.Connection;
import java.util.Collection;
import java.util.Map;

class BatchCommand<S, T> implements Executable<Map<S, T>> {

    private final JSqlClient sqlClient;

    private final Connection con;

    private final ImmutableProp prop;

    private final FieldFilter<Table<ImmutableSpi>> filter;

    private final Collection<ImmutableSpi> sources;

    public BatchCommand(
            JSqlClient sqlClient,
            Connection con,
            ImmutableProp prop,
            FieldFilter<Table<ImmutableSpi>> filter,
            Collection<ImmutableSpi> sources
    ) {
        this.sqlClient = sqlClient;
        this.con = con;
        this.prop = prop;
        this.filter = filter;
        this.sources = sources;
    }

    @Override
    public Map<S, T> execute() {
        if (con != null) {
            return executeImpl(con);
        }
        return sqlClient
                .getConnectionManager()
                .execute(this::executeImpl);
    }

    @Override
    public Map<S, T> execute(Connection con) {
        if (con != null) {
            return executeImpl(con);
        }
        if (this.con != null) {
            return executeImpl(this.con);
        }
        return sqlClient
                .getConnectionManager()
                .execute(this::executeImpl);
    }

    @SuppressWarnings("unchecked")
    private Map<S, T> executeImpl(Connection con) {
        return (Map<S, T>) new DataLoader(
                sqlClient,
                con,
                prop,
                filter
        ).load(sources);
    }
}
