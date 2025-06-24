import { DiceRollType } from '@graphql/generated/graphql'
import { IDiceRollType } from '../domains/dice.domain'

export class DiceMapper {
    public diceRollTypeEntityToDomain(entity: DiceRollType): IDiceRollType {
        switch (entity) {
            case DiceRollType.D20:
                return IDiceRollType.D20
            case DiceRollType.D12:
                return IDiceRollType.D12
            case DiceRollType.D10:
                return IDiceRollType.D10
            case DiceRollType.D8:
                return IDiceRollType.D8
            case DiceRollType.D6:
                return IDiceRollType.D6
            case DiceRollType.D4:
                return IDiceRollType.D4
        }
    }
}
