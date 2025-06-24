import { create } from 'zustand'
import {
    ICharacter,
    ICharacterWithClass,
} from '../services/domain/character.domain'
import { Character } from '@graphql/generated/graphql'

import { getCharacterByIdUsecase } from '../services/usecase/getCharacterById.usecase'
import { characterMapper } from '../services/mapper/characterMapper'

interface CharacterState {
    character: ICharacter | null
    setCharacter: (chracter: Character) => void
    characterWithClassDetail: ICharacterWithClass | null
    setCharacterWithClassDetail: (chracter: ICharacterWithClass) => void
    fetchCharacter: (characterId: string) => void
}

export const useCharacterStore = create<CharacterState>((set) => ({
    character: null,
    characterWithClassDetail: null,
    fetchCharacter: async (characterId: string) => {
        const result = await getCharacterByIdUsecase.handle(characterId)

        set(() => ({
            character: result,
        }))
    },
    setCharacter: async (chracter: Character) => {
        const afterMapper = characterMapper.entityToDomain(chracter)
        const hasChanged =
            JSON.stringify(afterMapper) !== JSON.stringify(chracter)

        if (hasChanged) {
            set(() => ({
                character: afterMapper,
            }))
        }
    },
    setCharacterWithClassDetail: async (chracter: ICharacterWithClass) => {
        set(() => ({
            characterWithClassDetail: chracter,
        }))
    },
}))
