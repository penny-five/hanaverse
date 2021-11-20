package com.hanaverse.service.mapper

import com.hanaverse.domain.WaterConsumption
import com.hanaverse.service.dto.WaterConsumptionDTO
import org.mapstruct.Mapper
import org.mapstruct.ReportingPolicy

@Mapper(
    componentModel = "spring",
    unmappedTargetPolicy = ReportingPolicy.IGNORE
)
interface WaterConsumptionMapper :
    EntityMapper<WaterConsumptionDTO, WaterConsumption> {

    override fun toDto(entity: WaterConsumption): WaterConsumptionDTO

    override fun toEntity(dto: WaterConsumptionDTO): WaterConsumption
}
