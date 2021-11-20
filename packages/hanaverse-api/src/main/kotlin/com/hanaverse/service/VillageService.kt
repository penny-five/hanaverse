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
import com.hanaverse.service.enum.WeatherForecast
import com.hanaverse.service.mapper.VillageMapper
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Service
import java.time.LocalDateTime
import java.util.*
import javax.persistence.EntityNotFoundException


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
        village.hananoidHappiness = calculateHappiness()
        village.weatherForecast = calculateWeather()

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
        village.hananoidHappiness = calculateHappiness()
        village.weatherForecast = calculateWeather()

        return village
    }

    private fun calculateHappiness(): Double {
        return 0.5
    }

    private fun calculateWeather(): WeatherForecast {
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
