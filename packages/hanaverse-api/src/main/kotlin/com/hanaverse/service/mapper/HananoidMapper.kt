package com.hanaverse.service.mapper

import com.hanaverse.domain.Hananoid
import com.hanaverse.service.dto.HananoidDTO
import org.mapstruct.*
import java.time.Duration
import java.time.LocalDateTime

@Mapper(
    componentModel = "spring",
    unmappedTargetPolicy = ReportingPolicy.IGNORE
)
interface HananoidMapper :
    EntityMapper<HananoidDTO, Hananoid> {

    @Mappings(
        Mapping(source = "created", target = "ageDays", qualifiedByName = ["createdToAge"])
    )
    override fun toDto(entity: Hananoid): HananoidDTO

    override fun toEntity(dto: HananoidDTO): Hananoid

    companion object {
        @JvmStatic
        @Named("createdToAge")
        fun createdToAge(created: LocalDateTime): Long {
            return Duration.between(created, LocalDateTime.now()).toDays()
        }
    }
}
