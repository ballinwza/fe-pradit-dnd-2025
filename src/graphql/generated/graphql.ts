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

export type Ability = {
    __typename?: 'Ability'
    charisma: Scalars['Int']['output']
    constitution: Scalars['Int']['output']
    dexterity: Scalars['Int']['output']
    intelligence: Scalars['Int']['output']
    strength: Scalars['Int']['output']
    wisdom: Scalars['Int']['output']
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
    ability: Ability
    avatarImage: Scalars['String']['output']
    classId: Scalars['String']['output']
    currentExp: Scalars['Int']['output']
    hitPoint: HitPoint
    id: Scalars['String']['output']
    name: Scalars['String']['output']
    pocketMoney: Array<Coin>
    proficiency: Proficiency
}

export type Class = {
    __typename?: 'Class'
    descriptionEn: Scalars['String']['output']
    descriptionTh: Scalars['String']['output']
    diceHpIncrease: DiceRollType
    id: Scalars['String']['output']
    name: Scalars['String']['output']
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

export enum DamagedType {
    Bludgeon = 'BLUDGEON',
    Pierce = 'PIERCE',
    Slash = 'SLASH',
}

export enum DiceRollType {
    D4 = 'D4',
    D6 = 'D6',
    D8 = 'D8',
    D10 = 'D10',
    D12 = 'D12',
    D20 = 'D20',
}

export type Equipment = {
    __typename?: 'Equipment'
    armor: Armor
    characterId: Scalars['String']['output']
    id: Scalars['String']['output']
    leftHanded: Weapon
    rightHanded: Weapon
}

export type HitPoint = {
    __typename?: 'HitPoint'
    currrentHp: Scalars['Int']['output']
    maxHp: Scalars['Int']['output']
    maxTemporaryHp: Scalars['Int']['output']
    temporaryHp: Scalars['Int']['output']
}

export type Proficiency = {
    __typename?: 'Proficiency'
    animal_handling: Scalars['Int']['output']
    arcana: Scalars['Int']['output']
    arobatics: Scalars['Int']['output']
    athletics: Scalars['Int']['output']
    deception: Scalars['Int']['output']
    history: Scalars['Int']['output']
    insight: Scalars['Int']['output']
    intimidation: Scalars['Int']['output']
    investigation: Scalars['Int']['output']
    medicine: Scalars['Int']['output']
    nature: Scalars['Int']['output']
    perception: Scalars['Int']['output']
    performance: Scalars['Int']['output']
    persuasion: Scalars['Int']['output']
    religion: Scalars['Int']['output']
    sleight_of_hand: Scalars['Int']['output']
    stealth: Scalars['Int']['output']
    survival: Scalars['Int']['output']
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
    classList: Array<Class>
    equipmentByCharacterId: Equipment
    shieldList: Array<Armor>
    userById: User
    userList: Array<User>
    weaponList: Array<Weapon>
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

export type QueryEquipmentByCharacterIdArgs = {
    characterId: Scalars['String']['input']
}

export type QueryUserByIdArgs = {
    id: Scalars['String']['input']
}

export type Shield = {
    __typename?: 'Shield'
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

export type Subscription = {
    __typename?: 'Subscription'
    watchCharacterById: Character
    watchEquipmentByCharacterId: Equipment
}

export type SubscriptionWatchCharacterByIdArgs = {
    id: Scalars['String']['input']
}

export type SubscriptionWatchEquipmentByCharacterIdArgs = {
    characterId: Scalars['String']['input']
}

export type User = {
    __typename?: 'User'
    displayName: Scalars['String']['output']
    email: Scalars['String']['output']
    id: Scalars['String']['output']
    password: Scalars['String']['output']
    userImage: Scalars['String']['output']
}

export type WatchEquipment = {
    __typename?: 'WatchEquipment'
    armor?: Maybe<Scalars['String']['output']>
    characterId?: Maybe<Scalars['String']['output']>
    id?: Maybe<Scalars['String']['output']>
    leftHanded?: Maybe<Scalars['String']['output']>
    rightHanded?: Maybe<Scalars['String']['output']>
}

export type Weapon = {
    __typename?: 'Weapon'
    damagedType: DamagedType
    descriptionEn: Scalars['String']['output']
    descriptionTh: Scalars['String']['output']
    diceQuantity: Scalars['Int']['output']
    diceRollType: DiceRollType
    id: Scalars['String']['output']
    imageUrl: Scalars['String']['output']
    longRange?: Maybe<Scalars['Int']['output']>
    name: Scalars['String']['output']
    normalRange?: Maybe<Scalars['Int']['output']>
    price: Coin
    weaponMastery: WeaponMastery
    weaponProperty: Array<WeaponProperty>
    weight: Weight
}

export type WeaponMastery = {
    __typename?: 'WeaponMastery'
    descriptionEn: Scalars['String']['output']
    descriptionTh: Scalars['String']['output']
    id: Scalars['String']['output']
    imageUrl: Scalars['String']['output']
    name: Scalars['String']['output']
}

export type WeaponProperty = {
    __typename?: 'WeaponProperty'
    descriptionEn: Scalars['String']['output']
    descriptionTh: Scalars['String']['output']
    id: Scalars['String']['output']
    imageUrl: Scalars['String']['output']
    name: Scalars['String']['output']
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

export type GetCharacterByIdResponseQueryVariables = Exact<{
    id: Scalars['String']['input']
}>

export type GetCharacterByIdResponseQuery = {
    __typename?: 'Query'
    characterById: {
        __typename?: 'Character'
        id: string
        name: string
        avatarImage: string
        classId: string
        currentExp: number
        hitPoint: {
            __typename?: 'HitPoint'
            maxHp: number
            currrentHp: number
            temporaryHp: number
            maxTemporaryHp: number
        }
        pocketMoney: Array<{
            __typename?: 'Coin'
            name: string
            shortType: CoinShortType
            value: number
        }>
        proficiency: {
            __typename?: 'Proficiency'
            athletics: number
            arobatics: number
            sleight_of_hand: number
            stealth: number
            arcana: number
            history: number
            investigation: number
            nature: number
            religion: number
            animal_handling: number
            insight: number
            medicine: number
            perception: number
            survival: number
            deception: number
            intimidation: number
            performance: number
            persuasion: number
        }
        ability: {
            __typename?: 'Ability'
            strength: number
            dexterity: number
            constitution: number
            intelligence: number
            wisdom: number
            charisma: number
        }
    }
}

export type WatchCharacterByIdResponseSubscriptionVariables = Exact<{
    id: Scalars['String']['input']
}>

export type WatchCharacterByIdResponseSubscription = {
    __typename?: 'Subscription'
    watchCharacterById: {
        __typename?: 'Character'
        id: string
        name: string
        avatarImage: string
        classId: string
        currentExp: number
        hitPoint: {
            __typename?: 'HitPoint'
            maxHp: number
            currrentHp: number
            temporaryHp: number
            maxTemporaryHp: number
        }
        pocketMoney: Array<{
            __typename?: 'Coin'
            name: string
            shortType: CoinShortType
            value: number
        }>
        proficiency: {
            __typename?: 'Proficiency'
            athletics: number
            arobatics: number
            sleight_of_hand: number
            stealth: number
            arcana: number
            history: number
            investigation: number
            nature: number
            religion: number
            animal_handling: number
            insight: number
            medicine: number
            perception: number
            survival: number
            deception: number
            intimidation: number
            performance: number
            persuasion: number
        }
        ability: {
            __typename?: 'Ability'
            strength: number
            dexterity: number
            constitution: number
            intelligence: number
            wisdom: number
            charisma: number
        }
    }
}

export type GetClassListResponseQueryVariables = Exact<{ [key: string]: never }>

export type GetClassListResponseQuery = {
    __typename?: 'Query'
    classList: Array<{
        __typename?: 'Class'
        id: string
        name: string
        descriptionEn: string
        descriptionTh: string
        diceHpIncrease: DiceRollType
    }>
}

export type EquipmentByCharacterIdResponseQueryVariables = Exact<{
    characterId: Scalars['String']['input']
}>

export type EquipmentByCharacterIdResponseQuery = {
    __typename?: 'Query'
    equipmentByCharacterId: {
        __typename?: 'Equipment'
        characterId: string
        armor: {
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
        }
        rightHanded: {
            __typename?: 'Weapon'
            name: string
            descriptionTh: string
            descriptionEn: string
            diceQuantity: number
            diceRollType: DiceRollType
            damagedType: DamagedType
            imageUrl: string
            normalRange?: number | null
            longRange?: number | null
            weight: { __typename?: 'Weight'; value: number; unit: string }
            price: {
                __typename?: 'Coin'
                name: string
                shortType: CoinShortType
                value: number
            }
            weaponMastery: {
                __typename?: 'WeaponMastery'
                id: string
                name: string
                descriptionEn: string
                descriptionTh: string
                imageUrl: string
            }
            weaponProperty: Array<{
                __typename?: 'WeaponProperty'
                id: string
                name: string
                descriptionEn: string
                descriptionTh: string
                imageUrl: string
            }>
        }
        leftHanded: {
            __typename?: 'Weapon'
            name: string
            descriptionTh: string
            descriptionEn: string
            diceQuantity: number
            diceRollType: DiceRollType
            damagedType: DamagedType
            imageUrl: string
            normalRange?: number | null
            longRange?: number | null
            weight: { __typename?: 'Weight'; value: number; unit: string }
            price: {
                __typename?: 'Coin'
                name: string
                shortType: CoinShortType
                value: number
            }
            weaponMastery: {
                __typename?: 'WeaponMastery'
                id: string
                name: string
                descriptionEn: string
                descriptionTh: string
                imageUrl: string
            }
            weaponProperty: Array<{
                __typename?: 'WeaponProperty'
                id: string
                name: string
                descriptionEn: string
                descriptionTh: string
                imageUrl: string
            }>
        }
    }
}

export type WatchEquipmentByCharacterIdResponseSubscriptionVariables = Exact<{
    characterId: Scalars['String']['input']
}>

export type WatchEquipmentByCharacterIdResponseSubscription = {
    __typename?: 'Subscription'
    watchEquipmentByCharacterId: {
        __typename?: 'Equipment'
        characterId: string
        armor: {
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
        }
        rightHanded: {
            __typename?: 'Weapon'
            id: string
            name: string
            descriptionTh: string
            descriptionEn: string
            diceQuantity: number
            diceRollType: DiceRollType
            damagedType: DamagedType
            imageUrl: string
            normalRange?: number | null
            longRange?: number | null
            weight: { __typename?: 'Weight'; value: number; unit: string }
            price: {
                __typename?: 'Coin'
                name: string
                shortType: CoinShortType
                value: number
            }
            weaponMastery: {
                __typename?: 'WeaponMastery'
                id: string
                name: string
                descriptionEn: string
                descriptionTh: string
                imageUrl: string
            }
            weaponProperty: Array<{
                __typename?: 'WeaponProperty'
                id: string
                name: string
                descriptionEn: string
                descriptionTh: string
                imageUrl: string
            }>
        }
        leftHanded: {
            __typename?: 'Weapon'
            id: string
            name: string
            descriptionTh: string
            descriptionEn: string
            diceQuantity: number
            diceRollType: DiceRollType
            damagedType: DamagedType
            imageUrl: string
            normalRange?: number | null
            longRange?: number | null
            weight: { __typename?: 'Weight'; value: number; unit: string }
            price: {
                __typename?: 'Coin'
                name: string
                shortType: CoinShortType
                value: number
            }
            weaponMastery: {
                __typename?: 'WeaponMastery'
                id: string
                name: string
                descriptionEn: string
                descriptionTh: string
                imageUrl: string
            }
            weaponProperty: Array<{
                __typename?: 'WeaponProperty'
                id: string
                name: string
                descriptionEn: string
                descriptionTh: string
                imageUrl: string
            }>
        }
    }
}

export type WeaponListResponseQueryVariables = Exact<{ [key: string]: never }>

export type WeaponListResponseQuery = {
    __typename?: 'Query'
    weaponList: Array<{
        __typename?: 'Weapon'
        id: string
        name: string
        diceQuantity: number
        descriptionEn: string
        descriptionTh: string
        diceRollType: DiceRollType
        damagedType: DamagedType
        imageUrl: string
        normalRange?: number | null
        longRange?: number | null
        weight: { __typename?: 'Weight'; value: number; unit: string }
        price: {
            __typename?: 'Coin'
            name: string
            shortType: CoinShortType
            value: number
        }
        weaponMastery: {
            __typename?: 'WeaponMastery'
            id: string
            name: string
            descriptionEn: string
            descriptionTh: string
            imageUrl: string
        }
        weaponProperty: Array<{
            __typename?: 'WeaponProperty'
            id: string
            name: string
            descriptionEn: string
            descriptionTh: string
            imageUrl: string
        }>
    }>
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
export const GetCharacterByIdResponseDocument = gql`
    query GetCharacterByIdResponse($id: String!) {
        characterById(id: $id) {
            id
            name
            avatarImage
            classId
            hitPoint {
                maxHp
                currrentHp
                temporaryHp
                maxTemporaryHp
            }
            currentExp
            pocketMoney {
                name
                shortType
                value
            }
            proficiency {
                athletics
                arobatics
                sleight_of_hand
                stealth
                arcana
                history
                investigation
                nature
                religion
                animal_handling
                insight
                medicine
                perception
                survival
                deception
                intimidation
                performance
                persuasion
            }
            ability {
                strength
                dexterity
                constitution
                intelligence
                wisdom
                charisma
            }
        }
    }
`

/**
 * __useGetCharacterByIdResponseQuery__
 *
 * To run a query within a React component, call `useGetCharacterByIdResponseQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharacterByIdResponseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharacterByIdResponseQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCharacterByIdResponseQuery(
    baseOptions: Apollo.QueryHookOptions<
        GetCharacterByIdResponseQuery,
        GetCharacterByIdResponseQueryVariables
    > &
        (
            | {
                  variables: GetCharacterByIdResponseQueryVariables
                  skip?: boolean
              }
            | { skip: boolean }
        ),
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useQuery<
        GetCharacterByIdResponseQuery,
        GetCharacterByIdResponseQueryVariables
    >(GetCharacterByIdResponseDocument, options)
}
export function useGetCharacterByIdResponseLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        GetCharacterByIdResponseQuery,
        GetCharacterByIdResponseQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useLazyQuery<
        GetCharacterByIdResponseQuery,
        GetCharacterByIdResponseQueryVariables
    >(GetCharacterByIdResponseDocument, options)
}
export function useGetCharacterByIdResponseSuspenseQuery(
    baseOptions?:
        | Apollo.SkipToken
        | Apollo.SuspenseQueryHookOptions<
              GetCharacterByIdResponseQuery,
              GetCharacterByIdResponseQueryVariables
          >,
) {
    const options =
        baseOptions === Apollo.skipToken
            ? baseOptions
            : { ...defaultOptions, ...baseOptions }
    return Apollo.useSuspenseQuery<
        GetCharacterByIdResponseQuery,
        GetCharacterByIdResponseQueryVariables
    >(GetCharacterByIdResponseDocument, options)
}
export type GetCharacterByIdResponseQueryHookResult = ReturnType<
    typeof useGetCharacterByIdResponseQuery
>
export type GetCharacterByIdResponseLazyQueryHookResult = ReturnType<
    typeof useGetCharacterByIdResponseLazyQuery
>
export type GetCharacterByIdResponseSuspenseQueryHookResult = ReturnType<
    typeof useGetCharacterByIdResponseSuspenseQuery
>
export type GetCharacterByIdResponseQueryResult = Apollo.QueryResult<
    GetCharacterByIdResponseQuery,
    GetCharacterByIdResponseQueryVariables
>
export const WatchCharacterByIdResponseDocument = gql`
    subscription WatchCharacterByIdResponse($id: String!) {
        watchCharacterById(id: $id) {
            id
            name
            avatarImage
            classId
            hitPoint {
                maxHp
                currrentHp
                temporaryHp
                maxTemporaryHp
            }
            currentExp
            pocketMoney {
                name
                shortType
                value
            }
            proficiency {
                athletics
                arobatics
                sleight_of_hand
                stealth
                arcana
                history
                investigation
                nature
                religion
                animal_handling
                insight
                medicine
                perception
                survival
                deception
                intimidation
                performance
                persuasion
            }
            ability {
                strength
                dexterity
                constitution
                intelligence
                wisdom
                charisma
            }
        }
    }
`

/**
 * __useWatchCharacterByIdResponseSubscription__
 *
 * To run a query within a React component, call `useWatchCharacterByIdResponseSubscription` and pass it any options that fit your needs.
 * When your component renders, `useWatchCharacterByIdResponseSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWatchCharacterByIdResponseSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useWatchCharacterByIdResponseSubscription(
    baseOptions: Apollo.SubscriptionHookOptions<
        WatchCharacterByIdResponseSubscription,
        WatchCharacterByIdResponseSubscriptionVariables
    > &
        (
            | {
                  variables: WatchCharacterByIdResponseSubscriptionVariables
                  skip?: boolean
              }
            | { skip: boolean }
        ),
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useSubscription<
        WatchCharacterByIdResponseSubscription,
        WatchCharacterByIdResponseSubscriptionVariables
    >(WatchCharacterByIdResponseDocument, options)
}
export type WatchCharacterByIdResponseSubscriptionHookResult = ReturnType<
    typeof useWatchCharacterByIdResponseSubscription
>
export type WatchCharacterByIdResponseSubscriptionResult =
    Apollo.SubscriptionResult<WatchCharacterByIdResponseSubscription>
export const GetClassListResponseDocument = gql`
    query GetClassListResponse {
        classList {
            id
            name
            descriptionEn
            descriptionTh
            diceHpIncrease
        }
    }
`

/**
 * __useGetClassListResponseQuery__
 *
 * To run a query within a React component, call `useGetClassListResponseQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClassListResponseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClassListResponseQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetClassListResponseQuery(
    baseOptions?: Apollo.QueryHookOptions<
        GetClassListResponseQuery,
        GetClassListResponseQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useQuery<
        GetClassListResponseQuery,
        GetClassListResponseQueryVariables
    >(GetClassListResponseDocument, options)
}
export function useGetClassListResponseLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        GetClassListResponseQuery,
        GetClassListResponseQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useLazyQuery<
        GetClassListResponseQuery,
        GetClassListResponseQueryVariables
    >(GetClassListResponseDocument, options)
}
export function useGetClassListResponseSuspenseQuery(
    baseOptions?:
        | Apollo.SkipToken
        | Apollo.SuspenseQueryHookOptions<
              GetClassListResponseQuery,
              GetClassListResponseQueryVariables
          >,
) {
    const options =
        baseOptions === Apollo.skipToken
            ? baseOptions
            : { ...defaultOptions, ...baseOptions }
    return Apollo.useSuspenseQuery<
        GetClassListResponseQuery,
        GetClassListResponseQueryVariables
    >(GetClassListResponseDocument, options)
}
export type GetClassListResponseQueryHookResult = ReturnType<
    typeof useGetClassListResponseQuery
>
export type GetClassListResponseLazyQueryHookResult = ReturnType<
    typeof useGetClassListResponseLazyQuery
>
export type GetClassListResponseSuspenseQueryHookResult = ReturnType<
    typeof useGetClassListResponseSuspenseQuery
>
export type GetClassListResponseQueryResult = Apollo.QueryResult<
    GetClassListResponseQuery,
    GetClassListResponseQueryVariables
>
export const EquipmentByCharacterIdResponseDocument = gql`
    query EquipmentByCharacterIdResponse($characterId: String!) {
        equipmentByCharacterId(characterId: $characterId) {
            characterId
            armor {
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
            rightHanded {
                name
                descriptionTh
                descriptionEn
                diceQuantity
                diceRollType
                damagedType
                weight {
                    value
                    unit
                }
                price {
                    name
                    shortType
                    value
                }
                weaponMastery {
                    id
                    name
                    descriptionEn
                    descriptionTh
                    imageUrl
                }
                weaponProperty {
                    id
                    name
                    descriptionEn
                    descriptionTh
                    imageUrl
                }
                imageUrl
                normalRange
                longRange
            }
            leftHanded {
                name
                descriptionTh
                descriptionEn
                diceQuantity
                diceRollType
                damagedType
                weight {
                    value
                    unit
                }
                price {
                    name
                    shortType
                    value
                }
                weaponMastery {
                    id
                    name
                    descriptionEn
                    descriptionTh
                    imageUrl
                }
                weaponProperty {
                    id
                    name
                    descriptionEn
                    descriptionTh
                    imageUrl
                }
                imageUrl
                normalRange
                longRange
            }
        }
    }
`

/**
 * __useEquipmentByCharacterIdResponseQuery__
 *
 * To run a query within a React component, call `useEquipmentByCharacterIdResponseQuery` and pass it any options that fit your needs.
 * When your component renders, `useEquipmentByCharacterIdResponseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEquipmentByCharacterIdResponseQuery({
 *   variables: {
 *      characterId: // value for 'characterId'
 *   },
 * });
 */
export function useEquipmentByCharacterIdResponseQuery(
    baseOptions: Apollo.QueryHookOptions<
        EquipmentByCharacterIdResponseQuery,
        EquipmentByCharacterIdResponseQueryVariables
    > &
        (
            | {
                  variables: EquipmentByCharacterIdResponseQueryVariables
                  skip?: boolean
              }
            | { skip: boolean }
        ),
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useQuery<
        EquipmentByCharacterIdResponseQuery,
        EquipmentByCharacterIdResponseQueryVariables
    >(EquipmentByCharacterIdResponseDocument, options)
}
export function useEquipmentByCharacterIdResponseLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        EquipmentByCharacterIdResponseQuery,
        EquipmentByCharacterIdResponseQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useLazyQuery<
        EquipmentByCharacterIdResponseQuery,
        EquipmentByCharacterIdResponseQueryVariables
    >(EquipmentByCharacterIdResponseDocument, options)
}
export function useEquipmentByCharacterIdResponseSuspenseQuery(
    baseOptions?:
        | Apollo.SkipToken
        | Apollo.SuspenseQueryHookOptions<
              EquipmentByCharacterIdResponseQuery,
              EquipmentByCharacterIdResponseQueryVariables
          >,
) {
    const options =
        baseOptions === Apollo.skipToken
            ? baseOptions
            : { ...defaultOptions, ...baseOptions }
    return Apollo.useSuspenseQuery<
        EquipmentByCharacterIdResponseQuery,
        EquipmentByCharacterIdResponseQueryVariables
    >(EquipmentByCharacterIdResponseDocument, options)
}
export type EquipmentByCharacterIdResponseQueryHookResult = ReturnType<
    typeof useEquipmentByCharacterIdResponseQuery
>
export type EquipmentByCharacterIdResponseLazyQueryHookResult = ReturnType<
    typeof useEquipmentByCharacterIdResponseLazyQuery
>
export type EquipmentByCharacterIdResponseSuspenseQueryHookResult = ReturnType<
    typeof useEquipmentByCharacterIdResponseSuspenseQuery
>
export type EquipmentByCharacterIdResponseQueryResult = Apollo.QueryResult<
    EquipmentByCharacterIdResponseQuery,
    EquipmentByCharacterIdResponseQueryVariables
>
export const WatchEquipmentByCharacterIdResponseDocument = gql`
    subscription WatchEquipmentByCharacterIdResponse($characterId: String!) {
        watchEquipmentByCharacterId(characterId: $characterId) {
            characterId
            armor {
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
            rightHanded {
                id
                name
                descriptionTh
                descriptionEn
                diceQuantity
                diceRollType
                damagedType
                weight {
                    value
                    unit
                }
                price {
                    name
                    shortType
                    value
                }
                weaponMastery {
                    id
                    name
                    descriptionEn
                    descriptionTh
                    imageUrl
                }
                weaponProperty {
                    id
                    name
                    descriptionEn
                    descriptionTh
                    imageUrl
                }
                imageUrl
                normalRange
                longRange
            }
            leftHanded {
                id
                name
                descriptionTh
                descriptionEn
                diceQuantity
                diceRollType
                damagedType
                weight {
                    value
                    unit
                }
                price {
                    name
                    shortType
                    value
                }
                weaponMastery {
                    id
                    name
                    descriptionEn
                    descriptionTh
                    imageUrl
                }
                weaponProperty {
                    id
                    name
                    descriptionEn
                    descriptionTh
                    imageUrl
                }
                imageUrl
                normalRange
                longRange
            }
        }
    }
`

/**
 * __useWatchEquipmentByCharacterIdResponseSubscription__
 *
 * To run a query within a React component, call `useWatchEquipmentByCharacterIdResponseSubscription` and pass it any options that fit your needs.
 * When your component renders, `useWatchEquipmentByCharacterIdResponseSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWatchEquipmentByCharacterIdResponseSubscription({
 *   variables: {
 *      characterId: // value for 'characterId'
 *   },
 * });
 */
export function useWatchEquipmentByCharacterIdResponseSubscription(
    baseOptions: Apollo.SubscriptionHookOptions<
        WatchEquipmentByCharacterIdResponseSubscription,
        WatchEquipmentByCharacterIdResponseSubscriptionVariables
    > &
        (
            | {
                  variables: WatchEquipmentByCharacterIdResponseSubscriptionVariables
                  skip?: boolean
              }
            | { skip: boolean }
        ),
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useSubscription<
        WatchEquipmentByCharacterIdResponseSubscription,
        WatchEquipmentByCharacterIdResponseSubscriptionVariables
    >(WatchEquipmentByCharacterIdResponseDocument, options)
}
export type WatchEquipmentByCharacterIdResponseSubscriptionHookResult =
    ReturnType<typeof useWatchEquipmentByCharacterIdResponseSubscription>
export type WatchEquipmentByCharacterIdResponseSubscriptionResult =
    Apollo.SubscriptionResult<WatchEquipmentByCharacterIdResponseSubscription>
export const WeaponListResponseDocument = gql`
    query WeaponListResponse {
        weaponList {
            id
            name
            diceQuantity
            descriptionEn
            descriptionTh
            diceRollType
            damagedType
            imageUrl
            normalRange
            longRange
            weight {
                value
                unit
            }
            price {
                name
                shortType
                value
            }
            weaponMastery {
                id
                name
                descriptionEn
                descriptionTh
                imageUrl
            }
            weaponProperty {
                id
                name
                descriptionEn
                descriptionTh
                imageUrl
            }
        }
    }
`

/**
 * __useWeaponListResponseQuery__
 *
 * To run a query within a React component, call `useWeaponListResponseQuery` and pass it any options that fit your needs.
 * When your component renders, `useWeaponListResponseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWeaponListResponseQuery({
 *   variables: {
 *   },
 * });
 */
export function useWeaponListResponseQuery(
    baseOptions?: Apollo.QueryHookOptions<
        WeaponListResponseQuery,
        WeaponListResponseQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useQuery<
        WeaponListResponseQuery,
        WeaponListResponseQueryVariables
    >(WeaponListResponseDocument, options)
}
export function useWeaponListResponseLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        WeaponListResponseQuery,
        WeaponListResponseQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useLazyQuery<
        WeaponListResponseQuery,
        WeaponListResponseQueryVariables
    >(WeaponListResponseDocument, options)
}
export function useWeaponListResponseSuspenseQuery(
    baseOptions?:
        | Apollo.SkipToken
        | Apollo.SuspenseQueryHookOptions<
              WeaponListResponseQuery,
              WeaponListResponseQueryVariables
          >,
) {
    const options =
        baseOptions === Apollo.skipToken
            ? baseOptions
            : { ...defaultOptions, ...baseOptions }
    return Apollo.useSuspenseQuery<
        WeaponListResponseQuery,
        WeaponListResponseQueryVariables
    >(WeaponListResponseDocument, options)
}
export type WeaponListResponseQueryHookResult = ReturnType<
    typeof useWeaponListResponseQuery
>
export type WeaponListResponseLazyQueryHookResult = ReturnType<
    typeof useWeaponListResponseLazyQuery
>
export type WeaponListResponseSuspenseQueryHookResult = ReturnType<
    typeof useWeaponListResponseSuspenseQuery
>
export type WeaponListResponseQueryResult = Apollo.QueryResult<
    WeaponListResponseQuery,
    WeaponListResponseQueryVariables
>
