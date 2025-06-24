import { gqlQuery } from '@lib/gql-config'
import { IClass } from '../domains/class.domain'
import { GetClassListResponseDocument } from '@graphql/generated/graphql'

export interface IClassRepository {
    getClassList(): Promise<IClass[]>
}

export class ClassRepository implements IClassRepository {
    async getClassList(): Promise<IClass[]> {
        try {
            const { data, loading, error } = await gqlQuery({
                query: GetClassListResponseDocument,
            })

            return data.classList
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}
