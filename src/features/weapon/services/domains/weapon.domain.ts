import { ICoin } from '@features/core/services/domains/coin.domain'
import { IDamagedType } from '@features/core/services/domains/damage.domain'
import { IDiceRollType } from '@features/core/services/domains/dice.domain'
import { IWeight } from '@features/core/services/domains/weight.domain'

export interface IWeapon {
    id: string
    name: string
    diceRollType: IDiceRollType
    damagedType: IDamagedType
    diceQuantity: number
    mastery: IWeaponMastery
    property: IWeaponProperty[]
    price: ICoin
    descriptionEn: string
    descriptionTh: string
    weight: IWeight
    imageUrl: string
    normalRange?: number
    longRange?: number
}

export interface IWeaponMastery {
    id: string
    name: string
    descriptionEn: string
    descriptionTh: string
    imageUrl: string
}

export interface IWeaponProperty {
    id: string
    name: string
    descriptionEn: string
    descriptionTh: string
    imageUrl: string
}
