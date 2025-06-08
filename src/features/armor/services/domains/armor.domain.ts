import { IAdvantageType } from '@features/core/services/domains/advantage.domain'
import { ICoin } from '@features/core/services/domains/coin.domain'
import { IWeight } from '@features/core/services/domains/weight.domain'

export interface IArmor {
    id: string
    armorType: IArmorType
    name: string
    armorClass: number
    maximumPlusArmorClass: number
    stealthAdvantageType: IAdvantageType
    price: ICoin
    strRequirement: number
    descriptionEn: string
    weight: IWeight
    imageUrl: string
}

export enum IArmorType {
    light = 'LIGHT',
    medium = 'MEDIUM',
    heavy = 'HEAVY',
    shield = 'SHIELD',
}
