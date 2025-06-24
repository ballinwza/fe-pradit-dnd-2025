import {
    Character,
    GetCharacterByIdResponseDocument,
} from '@graphql/generated/graphql'
import { gqlQuery } from '@lib/gql-config'

export interface ICharacterRepository {
    getCharacter(characterId: string): Promise<Character>
}

export class CharacterRepository implements ICharacterRepository {
    async getCharacter(characterId: string): Promise<Character> {
        try {
            const { data, loading, error } = await gqlQuery({
                query: GetCharacterByIdResponseDocument,
                variables: { id: characterId },
            })

            return data.characterById
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}
