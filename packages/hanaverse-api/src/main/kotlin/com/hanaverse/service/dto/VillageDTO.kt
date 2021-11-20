package com.hanaverse.service.dto

import com.hanaverse.service.enum.WeatherForecast

open class VillageDTO(
    var id: Long? = null,

    var villageName: String? = null,

    var householdSize: Int? = null,

    var hananoids: List<HananoidDTO> = listOf(),

    var hananoidHappiness: Double? = null,

    var weatherForecast: WeatherForecast? = null,

    var waterConsumptionHistory: List<WaterConsumptionDTO> = listOf()
)
