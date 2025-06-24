import { useSubscription } from '@apollo/client'
import {
    WatchCharacterByIdResponseDocument,
    WatchCharacterByIdResponseSubscription,
} from '@graphql/generated/graphql'
import { FC, useEffect } from 'react'
import { useCharacterStore } from '../stores/chracter.store'

interface Props {
    characterId: string
}

const WatchCharacterBridge: FC<Props> = ({ characterId }: Props) => {
    const { setCharacter } = useCharacterStore((state) => state)

    const { data, loading, error } = useSubscription(
        WatchCharacterByIdResponseDocument,
        {
            variables: { id: characterId },
        },
    )

    useEffect(() => {
        // if (loading) setLoading()
        // if (error) setError(error.message)
        if (data) {
            const {
                watchCharacterById,
            }: WatchCharacterByIdResponseSubscription = data

            setCharacter(watchCharacterById)
        }

        // return () => {
        //     clearCharacter()
        // }
    }, [data, loading, error])

    return <></>
}

export default WatchCharacterBridge
