'use client'
import { FC, useEffect } from 'react'
import { useClassStore } from '../stores/class.store'
import { useCharacterStore } from '@features/character/stores/chracter.store'
import { useObservable } from '@features/character/hooks/useSearch'

import { getCharacterByIdUsecase } from '@features/character/services/usecase/getCharacterById.usecase'

const ClassProvider: FC = () => {
    // const results = useObservable(testService.searchResults$, [])
    const { character, setCharacterWithClassDetail } = useCharacterStore(
        (state) => state,
    )
    const { classList } = useClassStore((state) => state)
    const test = useObservable(getCharacterByIdUsecase.characterResult$, [])

    useEffect(() => {
        if (character !== null) {
            console.log('provider class >> ', classList)
            getCharacterByIdUsecase.onChangeValue(character, classList ?? [])
        }
    }, [character])

    useEffect(() => {
        setCharacterWithClassDetail(test[0])
        console.log('test >> ', test)
    }, [test])
    return (
        <div>
            {/* <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        testService.search(e.target.value)
                    }
                />
                <div>
                    {results.map((result, index) => (
                        <li key={index} style={{ padding: '8px 0' }}>
                            {result}
                        </li>
                    ))}
                </div> */}
        </div>
    )
}

export default ClassProvider
