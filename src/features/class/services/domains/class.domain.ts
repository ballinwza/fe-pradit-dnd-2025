import { DiceRollType } from '@graphql/generated/graphql'

export interface IClass {
    id: string
    name: string
    descriptionEn: string
    descriptionTh: string
    diceHpIncrease: DiceRollType
}
