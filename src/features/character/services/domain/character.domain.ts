import { IAbilityShortType } from '@features/core/services/domains/ability.domain'
import { ICoin } from '@features/core/services/domains/coin.domain'
import { IProficiencyType } from '@features/core/services/domains/proficiency.domain'
import { Class } from '@graphql/generated/graphql'

export interface ICharacter {
    id: string
    name: string
    hitPoint: IHitPoint
    currentExp: number
    avatarImage: string
    pocketMoney: ICoin[]
    proficiency: IProficiency[]
    ability: IAbility[]
    classId: string
    // speed: number
    // initiativePoint: number
    // hitDice: number
    // user: IUser
}

export interface IHitPoint {
    maxHp: number
    currentHp: number
    temporaryHp: number
    maxTemporaryHp: number
}
export interface IProficiency {
    name: IProficiencyType
    value: number
    short: IAbilityShortType
}
export interface IAbility {
    name: string
    value: number
    short: IAbilityShortType
}
