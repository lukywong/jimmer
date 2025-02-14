package org.babyfish.jimmer.example.kt.graphql.controller

import org.babyfish.jimmer.example.kt.graphql.dal.BookStoreRepository
import org.babyfish.jimmer.example.kt.graphql.entities.Book
import org.babyfish.jimmer.example.kt.graphql.entities.BookStore
import org.babyfish.jimmer.example.kt.graphql.input.BookStoreInput
import org.babyfish.jimmer.sql.kt.KSqlClient
import org.springframework.graphql.data.method.annotation.Argument
import org.springframework.graphql.data.method.annotation.BatchMapping
import org.springframework.graphql.data.method.annotation.MutationMapping
import org.springframework.graphql.data.method.annotation.QueryMapping
import org.springframework.stereotype.Controller
import org.springframework.transaction.annotation.Transactional
import java.math.BigDecimal

@Controller
class BookStoreController(
    private val sqlClient: KSqlClient,
    private val bookStoreRepository: BookStoreRepository
) {

    // --- Query ---

    @QueryMapping
    fun bookStores(
        @Argument name: String?
    ): List<BookStore> {
        return bookStoreRepository.find(name)
    }

    // --- Association ---

    @BatchMapping
    fun books(
        // Must use `java.util.List` because Spring-GraphQL has a bug: #454
        stores: java.util.List<BookStore>
    ): Map<BookStore, List<Book>> =
        sqlClient
            .loaders
            .list(BookStore::books)
            .batchLoad(stores)

    // --- Calculation ---

    @BatchMapping
    fun avgPrice(
        // Must use `java.util.List` because Spring-GraphQL has a bug: #454
        stores: java.util.List<BookStore>
    ): Map<BookStore, BigDecimal> =
        sqlClient
            .loaders
            .value(BookStore::avgPrice)
            .batchLoad(stores)

    // --- Mutation ---
    @MutationMapping
    @Transactional
    fun saveBookStore(@Argument input: BookStoreInput): BookStore =
        sqlClient
            .entities
            .save(input.toBookStore())
            .modifiedEntity

    @MutationMapping
    @Transactional
    fun deleteBookStore(@Argument id: Long): Int {
        return sqlClient
            .entities
            .delete(BookStore::class, id)
            .affectedRowCount(BookStore::class)
    }
}