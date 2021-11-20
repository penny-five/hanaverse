package com.hanaverse.service.mapper

import com.hanaverse.domain.House
import com.hanaverse.service.dto.VillageDTO
import org.mapstruct.Mapper
import org.mapstruct.Mapping
import org.mapstruct.Mappings
import org.mapstruct.ReportingPolicy

@Mapper(
    componentModel = "spring",
    unmappedTargetPolicy = ReportingPolicy.IGNORE,
    uses = [HananoidMapper::class, WaterConsumptionMapper::class]
)
interface VillageMapper :
    EntityMapper<VillageDTO, House> {

    @Mappings(
        Mapping(source = "name", target = "villageName"),
        Mapping(source = "residents", target = "householdSize"),
    )
    override fun toDto(entity: House): VillageDTO

    override fun toEntity(dto: VillageDTO): House
}
