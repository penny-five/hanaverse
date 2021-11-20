package com.hanaverse.service.dto.batch

import com.fasterxml.jackson.annotation.JsonProperty

open class ApartmentDTO(
    var people: Int? = null,

    @get: JsonProperty("Hydractiva_shower")
    var hydractivaShower: SmartDeviceDTO? = null,

    @get: JsonProperty("Kitchen_optima_faucet")
    var kitchenFaucet: SmartDeviceDTO? = null,

    @get: JsonProperty("Optima_faucet")
    var optimaFaucet: SmartDeviceDTO? = null,

    @get: JsonProperty("Washing_machine")
    var washingMachine: SmartDeviceDTO? = null,

    @get: JsonProperty("Dishwasher")
    var dishwasher: SmartDeviceDTO? = null
)
