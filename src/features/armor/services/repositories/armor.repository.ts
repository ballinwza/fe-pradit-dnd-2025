import { Armor, ArmorListResponseDocument } from '@graphql/generated/graphql'
import { gqlQuery } from '@lib/gql-config'

export interface IArmorRepository {
    getArmorList(): Promise<Armor[]>
}

export class ArmorRepository implements IArmorRepository {
    async getArmorList(): Promise<Armor[]> {
        try {
            const { data, loading, error } = await gqlQuery({
                query: ArmorListResponseDocument,
            })
            return data.armorList
        } catch (error) {
            console.error('ArmorRepository.getArmorList Error : ', error)
            throw error
        }
    }
}
