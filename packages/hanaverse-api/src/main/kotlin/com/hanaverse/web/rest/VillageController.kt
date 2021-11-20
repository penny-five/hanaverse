package com.hanaverse.web.rest

import com.hanaverse.service.VillageService
import com.hanaverse.service.dto.DatasetDTO
import com.hanaverse.service.dto.VillageDTO
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/village")
class VillageController(private val villageService: VillageService) {

    @GetMapping("/{id}/state")
    fun getVillageStatus(@PathVariable id: Long): ResponseEntity<VillageDTO> {
        return ResponseEntity.ok(
            villageService.getVillageStatus(id)
        )
    }

    @PostMapping("/{id}/state")
    fun updateVillageStatus(@RequestBody datasetDTO: DatasetDTO): ResponseEntity<Void> {
        villageService.updateVillageStatus(datasetDTO)
        return ResponseEntity.ok().build()
    }

    @PostMapping("/create")
    fun createVillage(@RequestBody villageDTO: VillageDTO): ResponseEntity<VillageDTO> {
        return ResponseEntity.ok(
            villageService.createVillage(villageDTO)
        )
    }
}
