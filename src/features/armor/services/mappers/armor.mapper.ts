import { Armor, ArmorType } from '@graphql/generated/graphql'
import { IArmor, IArmorType } from '../domains/armor.domain'
import { AdvantageMapper } from '@features/core/services/mappers/advantage.mapper'
import { CoinMapper } from '@features/core/services/mappers/coin.mapper'
import { WeightMapper } from '@features/core/services/mappers/weight.mapper'

export class ArmorMapper {
    public armorEntityToDomain(entity: Armor): IArmor {
        return {
            id: entity.id,
            armorType: this.armorTypeEntityToDommain(entity.armorType),
            name: entity.name,
            armorClass: entity.armorClass,
            maximumPlusArmorClass: entity.maximumPlusArmorClass ?? 0,
            stealthAdvantageType:
                new AdvantageMapper().advantageTypeEntityToDomain(
                    entity.stealthAdvantageType,
                ),
            price: new CoinMapper().coinEntityToDomain(entity.price),
            strRequirement: entity.strRequirement ?? 0,
            descriptionEn: entity.descriptionEn,
            weight: new WeightMapper().weightEntityToDomain(entity.weight),
            imageUrl: entity.imageUrl,
        }
    }

    public armorTypeEntityToDommain(entity: ArmorType): IArmorType {
        switch (entity) {
            case ArmorType.Light:
                return IArmorType.light
            case ArmorType.Medium:
                return IArmorType.medium
            case ArmorType.Heavy:
                return IArmorType.heavy
            case ArmorType.Shield:
                return IArmorType.shield
        }
    }
}
