import {
    Ability,
    Character,
    HitPoint,
    Proficiency,
} from '@graphql/generated/graphql'
import {
    IAbility,
    ICharacter,
    IHitPoint,
    IProficiency,
} from '../domain/character.domain'
import { CoinMapper } from '@features/core/services/mappers/coin.mapper'

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
            proficiency: this.proficiencyEntityToDomain(entity.proficiency),
            ability: this.abilityEntityToDomain(entity.ability),
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
    public abilityEntityToDomain(entity: Ability): IAbility {
        return {
            strength: entity.strength,
            dexterity: entity.dexterity,
            constitution: entity.constitution,
            intelligence: entity.intelligence,
            wisdom: entity.wisdom,
            charisma: entity.charisma,
        }
    }
    public proficiencyEntityToDomain(entity: Proficiency): IProficiency {
        return {
            athletics: entity.athletics,
            arobatics: entity.arobatics,
            sleightOfHand: entity.sleight_of_hand,
            stealth: entity.stealth,
            arcana: entity.arcana,
            history: entity.history,
            investigation: entity.investigation,
            nature: entity.nature,
            religion: entity.religion,
            animalHandling: entity.animal_handling,
            insight: entity.insight,
            medicine: entity.medicine,
            perception: entity.perception,
            survival: entity.survival,
            deception: entity.deception,
            intimidation: entity.intimidation,
            performance: entity.performance,
            persuasion: entity.persuasion,
        }
    }
}

export const characterMapper = new CharacterMapper()
