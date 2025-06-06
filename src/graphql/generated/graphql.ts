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
    avatarImage: Scalars['String']['output']
    hitDice: Scalars['Int']['output']
    id: Scalars['String']['output']
    initiativePoint: Scalars['Int']['output']
    name: Scalars['String']['output']
    speed: Scalars['Int']['output']
    user: User
}

export type Query = {
    __typename?: 'Query'
    characterById: Character
    userById: User
    userList: Array<User>
}

export type QueryCharacterByIdArgs = {
    id: Scalars['String']['input']
}

export type QueryUserByIdArgs = {
    id: Scalars['String']['input']
}

export type User = {
    __typename?: 'User'
    _id: Scalars['String']['output']
    displayName: Scalars['String']['output']
    email: Scalars['String']['output']
    password: Scalars['String']['output']
    userImage: Scalars['String']['output']
}

export type CharacterByIdQueryVariables = Exact<{
    id: Scalars['String']['input']
}>

export type CharacterByIdQuery = {
    __typename?: 'Query'
    characterById: {
        __typename?: 'Character'
        id: string
        name: string
        avatarImage: string
        speed: number
        initiativePoint: number
        hitDice: number
        user: {
            __typename?: 'User'
            _id: string
            email: string
            displayName: string
            userImage: string
        }
    }
}

export const CharacterByIdDocument = gql`
    query CharacterById($id: String!) {
        characterById(id: $id) {
            id
            user {
                _id
                email
                displayName
                userImage
            }
            name
            avatarImage
            speed
            initiativePoint
            hitDice
        }
    }
`

/**
 * __useCharacterByIdQuery__
 *
 * To run a query within a React component, call `useCharacterByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCharacterByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCharacterByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCharacterByIdQuery(
    baseOptions: Apollo.QueryHookOptions<
        CharacterByIdQuery,
        CharacterByIdQueryVariables
    > &
        (
            | { variables: CharacterByIdQueryVariables; skip?: boolean }
            | { skip: boolean }
        ),
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useQuery<CharacterByIdQuery, CharacterByIdQueryVariables>(
        CharacterByIdDocument,
        options,
    )
}
export function useCharacterByIdLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        CharacterByIdQuery,
        CharacterByIdQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useLazyQuery<CharacterByIdQuery, CharacterByIdQueryVariables>(
        CharacterByIdDocument,
        options,
    )
}
export function useCharacterByIdSuspenseQuery(
    baseOptions?:
        | Apollo.SkipToken
        | Apollo.SuspenseQueryHookOptions<
              CharacterByIdQuery,
              CharacterByIdQueryVariables
          >,
) {
    const options =
        baseOptions === Apollo.skipToken
            ? baseOptions
            : { ...defaultOptions, ...baseOptions }
    return Apollo.useSuspenseQuery<
        CharacterByIdQuery,
        CharacterByIdQueryVariables
    >(CharacterByIdDocument, options)
}
export type CharacterByIdQueryHookResult = ReturnType<
    typeof useCharacterByIdQuery
>
export type CharacterByIdLazyQueryHookResult = ReturnType<
    typeof useCharacterByIdLazyQuery
>
export type CharacterByIdSuspenseQueryHookResult = ReturnType<
    typeof useCharacterByIdSuspenseQuery
>
export type CharacterByIdQueryResult = Apollo.QueryResult<
    CharacterByIdQuery,
    CharacterByIdQueryVariables
>
