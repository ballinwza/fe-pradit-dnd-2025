import { Equipment } from '@graphql/generated/graphql'
import { IEquipment } from '../domain/equipment.domain'
import { ArmorMapper } from '@features/armor/services/mappers/armor.mapper'
import { WeaponMapper } from '@features/weapon/services/mappers/weapon.mapper'

export class EquipmetMapper {
    public equipmentEntityToDomain(entity: Equipment): IEquipment {
        return {
            armor: new ArmorMapper().armorEntityToDomain(entity.armor),
            leftHanded: new WeaponMapper().weaponEntityToDomain(
                entity.leftHanded,
            ),
            rightHanded: new WeaponMapper().weaponEntityToDomain(
                entity.rightHanded,
            ),
        }
    }
}
