import { Character } from '@graphql/generated/graphql'
import { ICharacter } from '../domain/character.domain'
import { UserMapper } from '@features/user/services/mapper/userMapper'

export class CharacterMapper {
    public entityToDomain(entity: Character): ICharacter {
        const characterDomain: ICharacter = {
            id: entity.id,
            name: entity.name,
            avatarImage: entity.avatarImage,
            speed: entity.speed,
            initiativePoint: entity.initiativePoint,
            hitDice: entity.hitDice,
            user: new UserMapper().entityToDomain(entity.user),
        }

        return characterDomain
    }
}
