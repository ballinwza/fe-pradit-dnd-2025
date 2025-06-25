import {
    Weapon,
    WeaponMastery,
    WeaponProperty,
} from '@graphql/generated/graphql'
import {
    IWeapon,
    IWeaponMastery,
    IWeaponProperty,
} from '../domains/weapon.domain'
import { CoinMapper } from '@features/core/services/mappers/coin.mapper'
import { WeightMapper } from '@features/core/services/mappers/weight.mapper'
import { DiceMapper } from '@features/core/services/mappers/dice.mapper'
import { DamageMapper } from '@features/core/services/mappers/damage.mapper'

export class WeaponMapper {
    public weaponEntityToDomain(entity: Weapon): IWeapon {
        return {
            id: entity.id,
            name: entity.name,
            diceRollType: new DiceMapper().diceRollTypeEntityToDomain(
                entity.diceRollType,
            ),
            damagedType: new DamageMapper().damagedTypeTypeEntityToDomain(
                entity.damagedType,
            ),
            diceQuantity: entity.diceQuantity,
            mastery: this.masteryEntityToDomain(entity.weaponMastery),
            property: entity.weaponProperty.map((property) =>
                this.propertyEntityToDomain(property),
            ),
            price: new CoinMapper().coinEntityToDomain(entity.price),
            descriptionEn: entity.descriptionEn,
            descriptionTh: entity.descriptionTh,
            weight: new WeightMapper().weightEntityToDomain(entity.weight),
            imageUrl: entity.imageUrl,
            normalRange: entity?.normalRange ?? undefined,
            longRange: entity?.longRange ?? undefined,
        }
    }

    private masteryEntityToDomain(entity: WeaponMastery): IWeaponMastery {
        return {
            id: entity.id,
            name: entity.name,
            descriptionEn: entity.descriptionEn,
            descriptionTh: entity.descriptionTh,
            imageUrl: entity.imageUrl,
        }
    }

    private propertyEntityToDomain(entity: WeaponProperty): IWeaponProperty {
        return {
            id: entity.id,
            name: entity.name,
            descriptionEn: entity.descriptionEn,
            descriptionTh: entity.descriptionTh,
            imageUrl: entity.imageUrl,
        }
    }
}
