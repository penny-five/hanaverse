package com.hanaverse.service.dto.batch

import com.fasterxml.jackson.annotation.JsonProperty
import java.time.LocalDate

open class MeasurementDTO(
    @get: JsonProperty("Consumption")
    var consumption: Double? = null,

    @get: JsonProperty("TimeStamp")
    var timestamp: LocalDate? = null
)
