package com.hanaverse.repository

import com.hanaverse.domain.WaterConsumption
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository
import java.time.LocalDate

/**
 * Spring Data JPA repository for the [WaterConsumption] entity.
 */
@Repository
interface WaterConsumptionRepository : JpaRepository<WaterConsumption, Long> {

    @Query(
        """
        select wc
        from WaterConsumption wc
        join wc.house h
        where h.id = :houseId and wc.date = :date
        """
    )
    fun findByData(houseId: Long, date: LocalDate): WaterConsumption?
}
