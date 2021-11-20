package com.hanaverse.service.dto

import java.time.LocalDate

open class DatasetDTO(
    var id: Long,

    var consumption: Double,

    var date: LocalDate
)
