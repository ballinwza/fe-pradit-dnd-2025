'client use'
import { FC } from 'react'
import StatusCard from '../components/StatusCard'

const mockStatus = [
    {
        name: 'strength',
        short: 'str',
        value: 13,
        indicaterNumber: 1,
    },
    {
        name: 'dexterity',
        short: 'dex',
        value: 12,
        indicaterNumber: 1,
    },
    {
        name: 'constitution',
        short: 'con',
        value: 14,
        indicaterNumber: 2,
    },
    {
        name: 'intelligence',
        short: 'int',
        value: 8,
        indicaterNumber: 1,
    },
    {
        name: 'wisdom',
        short: 'wis',
        value: 16,
        indicaterNumber: 3,
    },
    {
        name: 'wisdom',
        short: 'wis',
        value: 12,
        indicaterNumber: 1,
    },
]
const StatusProvider: FC = () => {
    return (
        <div className="bg-grey flex flex-row gap-4">
            {mockStatus &&
                mockStatus.map(({ short, value, indicaterNumber }, index) => {
                    return (
                        <StatusCard
                            key={index}
                            short={short}
                            value={value}
                            indicaterNumber={indicaterNumber}
                        />
                    )
                })}
        </div>
    )
}

export default StatusProvider
