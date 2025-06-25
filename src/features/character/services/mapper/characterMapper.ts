import {
    Character,
    CharacterAbility,
    HitPoint,
    CharacterProficiency,
} from '@graphql/generated/graphql'
import {
    IAbility,
    ICharacter,
    IHitPoint,
    IProficiency,
} from '../domain/character.domain'
import { CoinMapper } from '@features/core/services/mappers/coin.mapper'
import { newAbilityMapper } from '@features/core/services/mappers/ability.mapper'
import { newProficiencyMapper } from '@features/core/services/mappers/proficiency.mapper'

class CharacterMapper {
    private coinMapper: CoinMapper

    constructor() {
        this.coinMapper = new CoinMapper()
    }

    public entityToDomain(entity: Character): ICharacter {
        const characterDomain: ICharacter = {
            id: entity.id,
            name: entity.name,
            hitPoint: this.hitPointEntityToDomain(entity.hitPoint),
            currentExp: entity.currentExp,
            avatarImage: entity.avatarImage,
            pocketMoney: entity.pocketMoney.map((price) =>
                this.coinMapper.coinEntityToDomain(price),
            ),
            proficiency: entity.proficiency.map((item) =>
                this.proficiencyEntityToDomain(item),
            ),
            ability: entity.ability.map((item) =>
                this.abilityEntityToDomain(item),
            ),
            classId: entity.classId,
            // speed: entity.speed,
            // initiativePoint: entity.initiativePoint,
            // hitDice: entity.hitDice,
            // user: new UserMapper().entityToDomain(entity.user),
        }

        return characterDomain
    }

    public hitPointEntityToDomain(entity: HitPoint): IHitPoint {
        return {
            maxHp: entity.maxHp,
            currentHp: entity.currrentHp,
            temporaryHp: entity.temporaryHp,
            maxTemporaryHp: entity.maxTemporaryHp,
        }
    }
    public abilityEntityToDomain(entity: CharacterAbility): IAbility {
        return {
            name: entity.name,
            value: entity.value,
            short: newAbilityMapper.abilityShortTypeEntityToDomain(
                entity.shortType,
            ),
        }
    }
    public proficiencyEntityToDomain(
        entity: CharacterProficiency,
    ): IProficiency {
        return {
            name: newProficiencyMapper.proficiencyTypeEntityToDomain(
                entity.name,
            ),
            value: entity.value,
            short: newAbilityMapper.abilityShortTypeEntityToDomain(
                entity.abilityShortTypeGroup,
            ),
        }
    }
}

export const characterMapper = new CharacterMapper()
