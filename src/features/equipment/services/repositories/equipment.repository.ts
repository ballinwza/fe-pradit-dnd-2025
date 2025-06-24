import {
    Equipment,
    EquipmentByCharacterIdResponseDocument,
} from '@graphql/generated/graphql'
import { gqlQuery } from '@lib/gql-config'

export interface IEquipmentRepository {
    getEquipmentByCharacterId(characterId: string): Promise<Equipment>
}

export class EquipmentRepository implements IEquipmentRepository {
    async getEquipmentByCharacterId(characterId: string): Promise<Equipment> {
        try {
            const { data, loading, error } = await gqlQuery({
                query: EquipmentByCharacterIdResponseDocument,
                variables: { characterId },
            })

            return data.equipmentByCharacterId
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}
