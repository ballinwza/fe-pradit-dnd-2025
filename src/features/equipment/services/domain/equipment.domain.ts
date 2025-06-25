import { IArmor } from '@features/armor/services/domains/armor.domain'
import { IWeapon } from '@features/weapon/services/domains/weapon.domain'

export interface IEquipment {
    armor: IArmor
    leftHanded: IWeapon
    rightHanded: IWeapon
}
