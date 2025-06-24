import { Weapon, WeaponListResponseDocument } from '@graphql/generated/graphql'
import { gqlQuery } from '@lib/gql-config'

export interface IWeaponRepository {
    getWeaponList(): Promise<Weapon[]>
}

export class WeaponRepository implements IWeaponRepository {
    async getWeaponList(): Promise<Weapon[]> {
        try {
            const { data, loading, error } = await gqlQuery({
                query: WeaponListResponseDocument,
            })

            return data.weaponList
        } catch (error) {
            console.error('WeaponRepository.getWeaponList Error : ', error)
            throw error
        }
    }
}
