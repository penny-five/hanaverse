package com.hanaverse.service

import com.hanaverse.domain.Hananoid
import com.hanaverse.domain.House
import com.hanaverse.domain.WaterConsumption
import com.hanaverse.domain.enum.HananoidColor
import com.hanaverse.repository.HananoidRepository
import com.hanaverse.repository.HouseRepository
import com.hanaverse.repository.WaterConsumptionRepository
import com.hanaverse.service.dto.DatasetDTO
import com.hanaverse.service.dto.VillageDTO
import com.hanaverse.service.dto.WaterConsumptionDTO
import com.hanaverse.service.enum.WeatherForecast
import com.hanaverse.service.mapper.VillageMapper
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Service
import java.time.LocalDate
import java.time.LocalDateTime
import java.util.*
import javax.persistence.EntityNotFoundException

private const val DAILY_LIMIT_PER_PERSON = 30

@Service
class VillageService(
    private val houseRepository: HouseRepository,
    private val waterConsumptionRepository: WaterConsumptionRepository,
    private val villageMapper: VillageMapper,
    private val hananoidRepository: HananoidRepository
) {

    private val rand: Random = Random()
    private val log = LoggerFactory.getLogger(javaClass)

    fun getVillageStatus(id: Long): VillageDTO {
        val house = houseRepository.findById(id)
            .orElseThrow { EntityNotFoundException("House not found") }
        val village = villageMapper.toDto(house)
        val currentConsumption = village.waterConsumptionHistory.find { it.date == LocalDate.now() }
        village.hananoidHappiness = calculateHappiness(currentConsumption)
        village.weatherForecast = calculateWeather(currentConsumption)

        return village
    }

    fun updateVillageStatus(datasetDTO: DatasetDTO) {
        val house = houseRepository.findById(datasetDTO.id)
            .orElseThrow { EntityNotFoundException("House not found") }
        var waterConsumption = waterConsumptionRepository.findByData(datasetDTO.id, datasetDTO.date)

        if (waterConsumption == null) {
            waterConsumption = WaterConsumption(
                liters = datasetDTO.consumption,
                date = datasetDTO.date,
                house = house
            )
        } else {
            waterConsumption.liters =
                waterConsumption.liters?.plus(datasetDTO.consumption)
        }

        waterConsumptionRepository.save(waterConsumption)

        // Calculate effect to hananoids
    }

    fun createVillage(villageDTO: VillageDTO): VillageDTO {
        val house = House(
            name = villageDTO.villageName,
            residents = villageDTO.householdSize,
        )
        houseRepository.save(house)

        house.hananoids.add(createHananoid(house))

        val village = villageMapper.toDto(house)
        val currentConsumption = village.waterConsumptionHistory.find { it.date == LocalDate.now() }
        village.hananoidHappiness = calculateHappiness(currentConsumption)
        village.weatherForecast = calculateWeather(currentConsumption)

        return village
    }

    private fun calculateHappiness(waterConsumption: WaterConsumptionDTO?): Double {
        if (waterConsumption == null) {
            return 1.0
        }

        if (waterConsumption.liters!! >= DAILY_LIMIT_PER_PERSON) {
            return 0.0
        }

        return waterConsumption.liters!! / DAILY_LIMIT_PER_PERSON
    }

    private fun calculateWeather(waterConsumption: WaterConsumptionDTO?): WeatherForecast {
        if (waterConsumption == null) {
            return WeatherForecast.HEAVY_RAIN
        }

        if (waterConsumption.liters!! >= DAILY_LIMIT_PER_PERSON) {
            return WeatherForecast.BURNING_HOT
        }

        val consumedQuota = waterConsumption.liters!! / DAILY_LIMIT_PER_PERSON

        if (consumedQuota > 0.5) {
            return WeatherForecast.CLOUDY
        }

        if (consumedQuota > 0.25) {
            return WeatherForecast.MILD_RAIN
        }

        return WeatherForecast.HEAVY_RAIN
    }

    private fun createHananoid(house: House): Hananoid {
        val hananoid = Hananoid(
            name = generateName(),
            color = HananoidColor.values()[rand.nextInt(HananoidColor.values().size)],
            created = LocalDateTime.now(),
            house = house
        )
        return hananoidRepository.save(hananoid)
    }

    companion object NameGenerator {

        private val beginning = arrayOf("B", "Z", "K", "M", "L", "Cl", "Pl", "T")
        private val middle = arrayOf("a", "e", "i", "o", "u")
        private val end = arrayOf("rk", "nk", "ng", "k", "ff")

        private val rand: Random = Random()

        fun generateName(): String {
            return beginning[rand.nextInt(beginning.size)] +
                    middle[rand.nextInt(middle.size)] +
                    end[rand.nextInt(end.size)]
        }
    }
}
