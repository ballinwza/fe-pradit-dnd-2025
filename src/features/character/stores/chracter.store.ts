import { create } from 'zustand'
import { ICharacter } from '../services/domain/character.domain'

import { getCharacterByIdUsecaseAsNewClass } from '../services/usecase/getCharacterById.usecase'
import { IClass } from '@features/class/services/domains/class.domain'

interface CharacterState {
    characterLoading: boolean
    setCharacterLoading: (characterLoading: boolean) => void
    character: ICharacter | null
    setCharacter: (chracter: ICharacter) => void
    fetchCharacter: (characterId: string) => void
    characterClass: IClass | null
    setCharacterClass: (classItem: IClass) => void
}

export const useCharacterStore = create<CharacterState>((set, get) => ({
    characterLoading: false,
    setCharacterLoading: async (characterLoading: boolean) =>
        set(() => ({ characterLoading })),
    character: null,
    setCharacter: async (character: ICharacter) => {
        set(() => ({
            character,
        }))
    },
    fetchCharacter: async (characterId: string) => {
        try {
            get().setCharacterLoading(true)
            const result =
                await getCharacterByIdUsecaseAsNewClass.handle(characterId)

            set(() => ({
                character: result,
            }))
        } catch (error) {
            console.error('useCharacterStore Error : ', error)
        } finally {
            get().setCharacterLoading(false)
        }
    },
    characterClass: null,
    setCharacterClass: (classItem: IClass) => {
        set(() => ({
            characterClass: {
                ...classItem,
            },
        }))
    },
}))
