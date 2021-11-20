package com.hanaverse.domain

import com.hanaverse.domain.enum.HananoidColor
import com.sun.istack.NotNull
import org.hibernate.annotations.Cache
import org.hibernate.annotations.CacheConcurrencyStrategy
import java.io.Serializable
import java.time.LocalDateTime
import javax.persistence.*

@Entity
@Table(name = "hananoid")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
class Hananoid(

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    var id: Long? = null,

    @NotNull
    @Column(length = 50, unique = true, nullable = false)
    var name: String? = null,

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(length = 50, unique = true, nullable = false)
    var color: HananoidColor? = null,

    @NotNull
    @Column(length = 50, unique = true, nullable = false)
    var created: LocalDateTime? = null,

    @NotNull
    @ManyToOne(optional = false)
    var house: House? = null

) : Serializable {

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is Hananoid) return false
        if (other.id == null || id == null) return false

        return id == other.id
    }

    override fun hashCode() = 31

    companion object {
        private const val serialVersionUID = 1L
    }
}
