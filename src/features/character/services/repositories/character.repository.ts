import { Character, GetCharacterDocument } from '@graphql/generated/graphql'
import { gqlQuery } from '@lib/gql-config'

export interface ICharacterRepository {
    getCharacter(): Promise<Character | undefined>
}

export class CharacterRepository implements ICharacterRepository {
    async getCharacter(): Promise<Character | undefined> {
        try {
            const { data, loading, error } = await gqlQuery({
                query: GetCharacterDocument,
            })

            return data.character
        } catch (error) {
            console.error(error)
        }
    }
}
