import { useCharacterStore } from '@features/character/stores/chracter.store'
import { FC } from 'react'
import ProficiencyCard from './ProficiencyCard'

const ProficiencyList: FC = () => {
    const { character } = useCharacterStore((state) => state)
    return (
        <div>
            {character?.proficiency.map((item, index) => (
                <ProficiencyCard
                    key={index}
                    name={item.name}
                    value={item.value}
                />
            ))}
        </div>
    )
}

export default ProficiencyList
