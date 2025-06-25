import { useSubscription } from '@apollo/client'
import {
    WatchCharacterByIdResponseDocument,
    WatchCharacterByIdResponseSubscription,
} from '@graphql/generated/graphql'
import { FC, useEffect } from 'react'
import { useCharacterStore } from '../stores/chracter.store'
import { isEmpty } from 'radash'
import { watchCharacterByIdUsecaseAsNewClass } from '../services/usecase/watchCharcaterById.usecase'
import { useObservable } from '../../core/hooks/useObservable'
import { useClassStore } from '@features/class/stores/class.store'
import { characterMapper } from '../services/mapper/characterMapper'

interface Props {
    characterId: string
}

const WatchCharacterBridge: FC<Props> = ({ characterId }: Props) => {
    const { character, setCharacter, setCharacterLoading, setCharacterClass } =
        useCharacterStore((state) => state)

    const { classList } = useClassStore((state) => state)

    const { data, loading, error } = useSubscription(
        WatchCharacterByIdResponseDocument,
        {
            variables: { id: characterId },
        },
    )

    const characterObserver = useObservable(
        watchCharacterByIdUsecaseAsNewClass.characterResult$,
        null,
    )

    useEffect(() => {
        if (loading) {
            setCharacterLoading(true)
        }
        // if (error) setError(error.message)
        if (!isEmpty(data)) {
            const {
                watchCharacterById,
            }: WatchCharacterByIdResponseSubscription = data

            const afterMapperCharacter =
                characterMapper.entityToDomain(watchCharacterById)

            setCharacter(afterMapperCharacter)
            setCharacterLoading(false)
        }
    }, [data, loading, error])

    useEffect(() => {
        if (character !== null && classList !== null) {
            watchCharacterByIdUsecaseAsNewClass.onWatching(character, classList)
        }
    }, [character])

    useEffect(() => {
        if (characterObserver !== null) {
            setCharacterClass(characterObserver)
        }
    }, [characterObserver])

    return <></>
}

export default WatchCharacterBridge
