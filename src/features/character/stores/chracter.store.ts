import { create } from 'zustand'
import { ICharacter } from '../services/domain/character.domain'
import { CharacterRepository } from '../services/repositories/character.repository'
import { GetCharacterByIdUsecase } from '../services/usecase/getCharacterById.usecase'

interface CharacterState {
    character: ICharacter | null
    fetchCharacter: () => void
}

export const useCharacterStore = create<CharacterState>((set) => ({
    character: null,
    fetchCharacter: async () => {
        const repo = new CharacterRepository()
        const usecase = new GetCharacterByIdUsecase(repo)

        const result = await usecase.handle()

        console.log(result)
        set(() => ({
            character: result,
        }))
    },
}))
