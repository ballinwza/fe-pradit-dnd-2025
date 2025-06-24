import { ICoin } from '@features/core/services/domains/coin.domain'

export interface ICharacterWithClass extends ICharacter {
    class: {
        id: string
        name: string
        descriptionEn: string
        descriptionTh: string
    }
}
export interface ICharacter {
    id: string
    name: string
    hitPoint: IHitPoint
    currentExp: number
    avatarImage: string
    pocketMoney: ICoin[]
    proficiency: IProficiency
    ability: IAbility
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
    athletics: number
    arobatics: number
    sleightOfHand: number
    stealth: number
    arcana: number
    history: number
    investigation: number
    nature: number
    religion: number
    animalHandling: number
    insight: number
    medicine: number
    perception: number
    survival: number
    deception: number
    intimidation: number
    performance: number
    persuasion: number
}
export interface IAbility {
    strength: number
    dexterity: number
    constitution: number
    intelligence: number
    wisdom: number
    charisma: number
    // [key: string]: number
}

type T = Record<string, number>
