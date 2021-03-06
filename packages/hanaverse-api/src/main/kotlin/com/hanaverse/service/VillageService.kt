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
import com.hanaverse.service.dto.batch.DatasetBatchDTO
import com.hanaverse.service.dto.batch.MeasurementDTO
import com.hanaverse.service.enum.WeatherForecast
import com.hanaverse.service.mapper.VillageMapper
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.time.LocalDate
import java.time.LocalDateTime
import java.util.*
import javax.persistence.EntityNotFoundException


private const val DAILY_LIMIT_PER_PERSON = 200

@Service
@Transactional
class VillageService(
    private val houseRepository: HouseRepository,
    private val waterConsumptionRepository: WaterConsumptionRepository,
    private val villageMapper: VillageMapper,
    private val hananoidRepository: HananoidRepository
) {

    private val rand: Random = Random()
    private val log = LoggerFactory.getLogger(javaClass)

    fun getVillages(): List<VillageDTO> {
        val houses = houseRepository.findAll()
        val villages = mutableListOf<VillageDTO>()
        houses.forEach { house ->
            val village = villageMapper.toDto(house)
            val currentConsumption =
                village.waterConsumptionHistory.find { it.date == LocalDate.now() }
            village.hananoidHappiness = calculateHappiness(currentConsumption)
            village.weatherForecast = calculateWeather(currentConsumption)
            villages.add(village)
        }
        return villages
    }

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
            residents = villageDTO.householdSize
        )
        houseRepository.save(house)

        house.hananoids.add(createHananoid(house, LocalDateTime.now()))

        val village = villageMapper.toDto(house)
        val currentConsumption = village.waterConsumptionHistory.find { it.date == LocalDate.now() }
        village.hananoidHappiness = calculateHappiness(currentConsumption)
        village.weatherForecast = calculateWeather(currentConsumption)

        return village
    }

    fun createHananoid(id: Long) {
        val house = houseRepository.findById(id)
            .orElseThrow { EntityNotFoundException("House not found") }
        createHananoid(house, LocalDateTime.now().minusDays((0..10).random().toLong()))
    }

    fun uploadData(datasetBatchDTO: DatasetBatchDTO) {
        datasetBatchDTO.houses.forEach { house ->
            house.apartments.forEachIndexed { index, apartment ->
                val newHouse = House(
                    name = "house$index",
                    residents = apartment.people
                )
                houseRepository.save(newHouse)

                for (i in 1..apartment.people!!) {
                    newHouse.hananoids.add(
                        createHananoid(
                            newHouse,
                            LocalDateTime.now().minusDays((0..365).random().toLong())
                        )
                    )
                }

                val shower = apartment.hydractivaShower!!.measurements.groupBy { it.timestamp!! }
                val kitchenFaucet =
                    apartment.kitchenFaucet!!.measurements.groupBy { it.timestamp!! }
                val optimaFaucet = apartment.optimaFaucet!!.measurements.groupBy { it.timestamp!! }
                val washingMachine =
                    apartment.washingMachine!!.measurements.groupBy { it.timestamp!! }
                val dishwasher = apartment.dishwasher!!.measurements.groupBy { it.timestamp!! }

                val combined = shower.toMutableMap()
                mergeMap(combined, kitchenFaucet)
                mergeMap(combined, optimaFaucet)
                mergeMap(combined, washingMachine)
                mergeMap(combined, dishwasher)

                combined.forEach { (date, measurements) ->
                    val waterConsumption = WaterConsumption(
                        liters = measurements.sumOf { it.consumption!! },
                        date = date,
                        house = newHouse
                    )
                    waterConsumptionRepository.save(waterConsumption)
                }
            }
        }
    }

    private fun mergeMap(
        combined: MutableMap<LocalDate, List<MeasurementDTO>>,
        new: Map<LocalDate, List<MeasurementDTO>>
    ) {
        new.forEach { (k, v) ->
            combined.merge(
                k, v
            ) { v1, v2 -> v1 + v2 }
        }
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

    private fun createHananoid(house: House, created: LocalDateTime): Hananoid {
        val hananoid = Hananoid(
            name = generateName(),
            color = HananoidColor.values()[rand.nextInt(HananoidColor.values().size)].toString(),
            created = created,
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
