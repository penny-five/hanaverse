package com.hanaverse.domain

import com.sun.istack.NotNull
import org.hibernate.annotations.Cache
import org.hibernate.annotations.CacheConcurrencyStrategy
import java.io.Serializable
import java.time.LocalDate
import javax.persistence.*

@Entity
@Table(name = "water_consumption")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
class WaterConsumption(

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    var id: Long? = null,

    @NotNull
    @Column(length = 50, unique = true, nullable = false)
    var liters: Double? = null,

    @NotNull
    @Column(length = 50, unique = true, nullable = false)
    var date: LocalDate? = null,

    @NotNull
    @ManyToOne(optional = false)
    var house: House? = null

) : Serializable {

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is WaterConsumption) return false
        if (other.id == null || id == null) return false

        return id == other.id
    }

    override fun hashCode() = 31

    companion object {
        private const val serialVersionUID = 1L
    }
}
