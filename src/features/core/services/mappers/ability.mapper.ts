import { AbilityShortType } from '@graphql/generated/graphql'
import { IAbilityShortType } from '../domains/ability.domain'

class AbilityMapper {
    public abilityShortTypeEntityToDomain(
        entity: AbilityShortType,
    ): IAbilityShortType {
        switch (entity) {
            case AbilityShortType.Str:
                return IAbilityShortType.STR
            case AbilityShortType.Dex:
                return IAbilityShortType.DEX
            case AbilityShortType.Con:
                return IAbilityShortType.CON
            case AbilityShortType.Int:
                return IAbilityShortType.INT
            case AbilityShortType.Wis:
                return IAbilityShortType.WIS
            case AbilityShortType.Cha:
                return IAbilityShortType.CHA
        }
    }
}

export const newAbilityMapper = new AbilityMapper()
