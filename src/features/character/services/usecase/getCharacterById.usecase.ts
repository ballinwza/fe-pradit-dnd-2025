import { ICharacter } from '../domain/character.domain'

import {
    CharacterRepository,
    ICharacterRepository,
} from '../repositories/character.repository'
import { characterMapper } from '../mapper/characterMapper'

class GetCharacterByIdUsecase {
    private characterRepository: ICharacterRepository

    constructor() {
        this.characterRepository = new CharacterRepository()
    }

    public async handle(characterId: string): Promise<ICharacter> {
        const characterRepository =
            await this.characterRepository.getCharacter(characterId)

        const result = characterMapper.entityToDomain(characterRepository)

        return result
    }
}

export const getCharacterByIdUsecaseAsNewClass = new GetCharacterByIdUsecase()
