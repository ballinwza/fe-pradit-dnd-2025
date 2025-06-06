import { Character, CharacterByIdDocument } from '@graphql/generated/graphql'
import { gqlQuery } from '@lib/gql-config'

export interface ICharacterRepository {
    getCharacter(): Promise<Character>
}

export class CharacterRepository implements ICharacterRepository {
    async getCharacter(): Promise<Character> {
        try {
            const { data, loading, error } = await gqlQuery({
                query: CharacterByIdDocument,
                variables: { id: '6839b9ad34d38e31825f2ba2' },
            })

            return data.characterById
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}
