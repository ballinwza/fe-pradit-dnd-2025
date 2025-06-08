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

export type AbilityDetail = {
    __typename?: 'AbilityDetail'
    description_en: Scalars['String']['output']
    description_th: Scalars['String']['output']
    id: Scalars['String']['output']
    name: Scalars['String']['output']
    proficiencies: Array<ProficiencyDetail>
    short: AbilityShortType
}

export enum AbilityShortType {
    Cha = 'CHA',
    Con = 'CON',
    Dex = 'DEX',
    Int = 'INT',
    Str = 'STR',
    Wis = 'WIS',
}

export enum AdvantageType {
    Advantage = 'ADVANTAGE',
    Disadvantage = 'DISADVANTAGE',
    None = 'NONE',
}

export type Armor = {
    __typename?: 'Armor'
    armorClass: Scalars['Int']['output']
    armorType: ArmorType
    descriptionEn: Scalars['String']['output']
    id: Scalars['String']['output']
    imageUrl: Scalars['String']['output']
    maximumPlusArmorClass?: Maybe<Scalars['Int']['output']>
    name: Scalars['String']['output']
    price: Coin
    stealthAdvantageType: AdvantageType
    strRequirement?: Maybe<Scalars['Int']['output']>
    weight: Weight
}

export enum ArmorType {
    Heavy = 'HEAVY',
    Light = 'LIGHT',
    Medium = 'MEDIUM',
    Shield = 'SHIELD',
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

export type Coin = {
    __typename?: 'Coin'
    name: Scalars['String']['output']
    shortType: CoinShortType
    value: Scalars['Float']['output']
}

export enum CoinShortType {
    Cp = 'CP',
    Ep = 'EP',
    Gp = 'GP',
    Pp = 'PP',
    Sp = 'SP',
}

export type ProficiencyDetail = {
    __typename?: 'ProficiencyDetail'
    description_en: Scalars['String']['output']
    description_th: Scalars['String']['output']
    name: Scalars['String']['output']
}

export type Query = {
    __typename?: 'Query'
    abilityDetailByShort: AbilityDetail
    armorById: Armor
    armorList: Array<Armor>
    characterById: Character
    shieldList: Array<Armor>
    userById: User
    userList: Array<User>
}

export type QueryAbilityDetailByShortArgs = {
    short: AbilityShortType
}

export type QueryArmorByIdArgs = {
    id: Scalars['String']['input']
}

export type QueryCharacterByIdArgs = {
    id: Scalars['String']['input']
}

export type QueryUserByIdArgs = {
    id: Scalars['String']['input']
}

export type User = {
    __typename?: 'User'
    displayName: Scalars['String']['output']
    email: Scalars['String']['output']
    id: Scalars['String']['output']
    password: Scalars['String']['output']
    userImage: Scalars['String']['output']
}

export type Weight = {
    __typename?: 'Weight'
    unit: Scalars['String']['output']
    value: Scalars['Int']['output']
}

export type ArmorListResponseQueryVariables = Exact<{ [key: string]: never }>

export type ArmorListResponseQuery = {
    __typename?: 'Query'
    armorList: Array<{
        __typename?: 'Armor'
        id: string
        armorType: ArmorType
        name: string
        armorClass: number
        maximumPlusArmorClass?: number | null
        stealthAdvantageType: AdvantageType
        strRequirement?: number | null
        descriptionEn: string
        imageUrl: string
        price: {
            __typename?: 'Coin'
            name: string
            shortType: CoinShortType
            value: number
        }
        weight: { __typename?: 'Weight'; value: number; unit: string }
    }>
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
            id: string
            email: string
            displayName: string
            userImage: string
        }
    }
}

export const ArmorListResponseDocument = gql`
    query ArmorListResponse {
        armorList {
            id
            armorType
            name
            armorClass
            maximumPlusArmorClass
            stealthAdvantageType
            price {
                name
                shortType
                value
            }
            strRequirement
            descriptionEn
            weight {
                value
                unit
            }
            imageUrl
        }
    }
`

/**
 * __useArmorListResponseQuery__
 *
 * To run a query within a React component, call `useArmorListResponseQuery` and pass it any options that fit your needs.
 * When your component renders, `useArmorListResponseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArmorListResponseQuery({
 *   variables: {
 *   },
 * });
 */
export function useArmorListResponseQuery(
    baseOptions?: Apollo.QueryHookOptions<
        ArmorListResponseQuery,
        ArmorListResponseQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useQuery<
        ArmorListResponseQuery,
        ArmorListResponseQueryVariables
    >(ArmorListResponseDocument, options)
}
export function useArmorListResponseLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        ArmorListResponseQuery,
        ArmorListResponseQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useLazyQuery<
        ArmorListResponseQuery,
        ArmorListResponseQueryVariables
    >(ArmorListResponseDocument, options)
}
export function useArmorListResponseSuspenseQuery(
    baseOptions?:
        | Apollo.SkipToken
        | Apollo.SuspenseQueryHookOptions<
              ArmorListResponseQuery,
              ArmorListResponseQueryVariables
          >,
) {
    const options =
        baseOptions === Apollo.skipToken
            ? baseOptions
            : { ...defaultOptions, ...baseOptions }
    return Apollo.useSuspenseQuery<
        ArmorListResponseQuery,
        ArmorListResponseQueryVariables
    >(ArmorListResponseDocument, options)
}
export type ArmorListResponseQueryHookResult = ReturnType<
    typeof useArmorListResponseQuery
>
export type ArmorListResponseLazyQueryHookResult = ReturnType<
    typeof useArmorListResponseLazyQuery
>
export type ArmorListResponseSuspenseQueryHookResult = ReturnType<
    typeof useArmorListResponseSuspenseQuery
>
export type ArmorListResponseQueryResult = Apollo.QueryResult<
    ArmorListResponseQuery,
    ArmorListResponseQueryVariables
>
export const CharacterByIdDocument = gql`
    query CharacterById($id: String!) {
        characterById(id: $id) {
            id
            user {
                id
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
