package com.hanaverse.repository

import com.hanaverse.domain.House
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

/**
 * Spring Data JPA repository for the [House] entity.
 */
@Repository
interface HouseRepository : JpaRepository<House, Long>
