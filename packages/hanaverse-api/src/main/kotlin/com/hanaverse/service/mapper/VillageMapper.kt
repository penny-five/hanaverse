package com.hanaverse.service.mapper

import com.hanaverse.domain.House
import com.hanaverse.service.dto.VillageDTO
import org.mapstruct.Mapper
import org.mapstruct.ReportingPolicy

@Mapper(
    componentModel = "spring",
    unmappedTargetPolicy = ReportingPolicy.IGNORE
)
interface VillageMapper :
    EntityMapper<VillageDTO, House> {

    override fun toDto(entity: House): VillageDTO

    override fun toEntity(dto: VillageDTO): House
}
