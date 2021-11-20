package com.hanaverse.service.dto

import com.hanaverse.domain.enum.HananoidColor

open class HananoidDTO(
    var name: String? = null,

    var color: HananoidColor? = null,

    var ageDays: Long? = null
)
