package com.hanaverse.repository

import com.hanaverse.domain.Hananoid
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

/**
 * Spring Data JPA repository for the [Hananoid] entity.
 */
@Repository
interface HananoidRepository : JpaRepository<Hananoid, Long> {
}
