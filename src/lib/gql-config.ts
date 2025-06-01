import {
    ApolloQueryResult,
    FetchResult,
    MutationOptions,
    QueryOptions,
} from '@apollo/client'
import { gqlClient } from './apollo-client'

interface CustomQueryOptions extends QueryOptions {
    headers?: Record<string, string>
}

interface CustomMutationOptions extends MutationOptions {
    headers?: Record<string, string>
}

export const gqlQuery = async (
    queryOptionsType: CustomQueryOptions,
): Promise<
    ApolloQueryResult<{
        [key: string]: any
    }>
> => {
    try {
        const { headers } = queryOptionsType

        return await gqlClient({
            ...headers,
        }).query({
            fetchPolicy: 'no-cache',
            ...queryOptionsType,
        })
    } catch (error: any) {
        throw error
    }
}

export const gqlMutate = async (
    mutationOptionsType: CustomMutationOptions,
): Promise<FetchResult<any, Record<string, any>, Record<string, any>>> => {
    try {
        const { headers } = mutationOptionsType

        return await gqlClient({
            ...headers,
        }).mutate({
            fetchPolicy: 'no-cache',
            ...mutationOptionsType,
        })
    } catch (error: any) {
        throw error
    }
}
