import { ICharacter } from '../domain/character.domain'
import { CharacterMapper } from '../mapper/characterMapper'
import { ICharacterRepository } from '../repositories/character.repository'

export class GetCharacterByIdUsecase {
    constructor(private readonly characterRepository: ICharacterRepository) {}

    async handle(): Promise<ICharacter> {
        const characterRepository =
            await this.characterRepository.getCharacter()

        const result = new CharacterMapper().entityToDomain(characterRepository)

        return result
    }
}
