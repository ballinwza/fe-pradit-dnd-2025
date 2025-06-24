'use client'
import { FC } from 'react'
import StatusCard from '../components/StatusCard'
import { useCharacterStore } from '../stores/chracter.store'
import { IAbility } from '../services/domain/character.domain'

const mockStatus: { name: string; short: string }[] = [
    {
        name: 'strength',
        short: 'str',
    },
    {
        name: 'dexterity',
        short: 'dex',
    },
    {
        name: 'constitution',
        short: 'con',
    },
    {
        name: 'intelligence',
        short: 'int',
    },
    {
        name: 'wisdom',
        short: 'wis',
    },
    {
        name: 'charisma',
        short: 'cha',
    },
]

const StatusList: FC = () => {
    const { character } = useCharacterStore((state) => state)

    return (
        <div className="bg-grey flex flex-row gap-4">
            {character &&
                mockStatus.map((status, index) => {
                    const statusPoint: number =
                        character.ability[status.name as keyof IAbility]

                    return (
                        <StatusCard
                            key={index}
                            short={status.short}
                            value={statusPoint}
                        />
                    )
                })}
        </div>
    )
}

export default StatusList
