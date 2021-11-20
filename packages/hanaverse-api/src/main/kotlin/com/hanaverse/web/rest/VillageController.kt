package com.hanaverse.web.rest

import com.hanaverse.service.VillageService
import com.hanaverse.service.dto.VillageDTO
import com.hanaverse.service.mapper.VillageMapper
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.security.Principal

@RestController
@RequestMapping("/village")
class VillageController(private val villageService: VillageService) {

    @GetMapping("/{id}/state")
    fun getVillageStatus(
        @PathVariable id: Long,
        principal: Principal?
    ): ResponseEntity<VillageDTO> {
        return ResponseEntity.ok(
            villageService.getVillageStatus(id)
        )
    }
}
