package com.hanaverse.service.dto

import java.time.LocalDate

open class WaterConsumptionDTO(
    var date: LocalDate? = null,

    var liters: Int? = null
)
