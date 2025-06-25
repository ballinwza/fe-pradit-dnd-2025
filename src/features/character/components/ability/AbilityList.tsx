'use client'
import { FC } from 'react'
import AbilityCard from './AbilityCard'
import { useCharacterStore } from '../../stores/chracter.store'

const AbilityList: FC = () => {
    const { character } = useCharacterStore((state) => state)

    return (
        <div className="bg-grey flex flex-row gap-4">
            {character?.ability &&
                character?.ability.map((item, index) => (
                    <AbilityCard
                        key={index}
                        short={item.short}
                        value={item.value}
                    />
                ))}
        </div>
    )
}

export default AbilityList
