package com.hanaverse.service

import com.hanaverse.domain.House
import com.hanaverse.repository.HouseRepository
import com.hanaverse.service.dto.HananoidDTO
import com.hanaverse.service.dto.VillageDTO
import com.hanaverse.service.dto.WaterConsumptionDTO
import com.hanaverse.service.enum.WeatherForecast
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Service
import java.time.LocalDate


@Service
class VillageService(private val houseRepository: HouseRepository) {

    private val log = LoggerFactory.getLogger(javaClass)

    fun getVillageStatus(id: Long): VillageDTO {
        /*return houseRepository.findById(id)
            .orElseThrow { EntityNotFoundException("User not found") }*/
        val hananoid = HananoidDTO("Joonas")
        val waterConsumption1 = WaterConsumptionDTO(LocalDate.now().minusDays(2), 10)
        val waterConsumption2 = WaterConsumptionDTO(LocalDate.now().minusDays(1), 15)
        return VillageDTO(
            "test",
            1,
            listOf(hananoid),
            0.5,
            WeatherForecast.HEAVY_RAIN,
            listOf(waterConsumption1, waterConsumption2)
        )
    }
}
