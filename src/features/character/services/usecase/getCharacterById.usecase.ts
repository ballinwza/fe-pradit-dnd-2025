import { ICharacter } from '../domain/character.domain'
import { ICharacterRepository } from '../repositories/character.repository'

export class GetCharacterByIdUsecase {
    constructor(private readonly characterRepository: ICharacterRepository) {}

    async handle(): Promise<ICharacter> {
        const result = await this.characterRepository.getCharacter()

        if (result === undefined) {
        }

        const map: ICharacter = {
            id: '',
            name: result?.name ?? '',
            avatarImage: '',
            speed: 1,
            initiativePoint: 1,
            hitDice: 1,
        }

        return map
    }
}
