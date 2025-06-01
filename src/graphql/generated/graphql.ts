import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
    T extends { [key: string]: unknown },
    K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
    | T
    | {
          [P in keyof T]?: P extends ' $fragmentName' | '__typename'
              ? T[P]
              : never
      }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string }
    String: { input: string; output: string }
    Boolean: { input: boolean; output: boolean }
    Int: { input: number; output: number }
    Float: { input: number; output: number }
}

export type Character = {
    __typename?: 'Character'
    name: Scalars['String']['output']
}

export type Query = {
    __typename?: 'Query'
    character: Character
    user: User
}

export type User = {
    __typename?: 'User'
    email: Scalars['String']['output']
}

export type GetCharacterQueryVariables = Exact<{ [key: string]: never }>

export type GetCharacterQuery = {
    __typename?: 'Query'
    character: { __typename?: 'Character'; name: string }
}

export const GetCharacterDocument = gql`
    query GetCharacter {
        character {
            name
        }
    }
`

/**
 * __useGetCharacterQuery__
 *
 * To run a query within a React component, call `useGetCharacterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharacterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharacterQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCharacterQuery(
    baseOptions?: Apollo.QueryHookOptions<
        GetCharacterQuery,
        GetCharacterQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useQuery<GetCharacterQuery, GetCharacterQueryVariables>(
        GetCharacterDocument,
        options,
    )
}
export function useGetCharacterLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        GetCharacterQuery,
        GetCharacterQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useLazyQuery<GetCharacterQuery, GetCharacterQueryVariables>(
        GetCharacterDocument,
        options,
    )
}
export function useGetCharacterSuspenseQuery(
    baseOptions?:
        | Apollo.SkipToken
        | Apollo.SuspenseQueryHookOptions<
              GetCharacterQuery,
              GetCharacterQueryVariables
          >,
) {
    const options =
        baseOptions === Apollo.skipToken
            ? baseOptions
            : { ...defaultOptions, ...baseOptions }
    return Apollo.useSuspenseQuery<
        GetCharacterQuery,
        GetCharacterQueryVariables
    >(GetCharacterDocument, options)
}
export type GetCharacterQueryHookResult = ReturnType<
    typeof useGetCharacterQuery
>
export type GetCharacterLazyQueryHookResult = ReturnType<
    typeof useGetCharacterLazyQuery
>
export type GetCharacterSuspenseQueryHookResult = ReturnType<
    typeof useGetCharacterSuspenseQuery
>
export type GetCharacterQueryResult = Apollo.QueryResult<
    GetCharacterQuery,
    GetCharacterQueryVariables
>
