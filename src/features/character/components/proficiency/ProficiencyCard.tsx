import { FC } from 'react'

interface Props {
    name: string
    value: number
}

const ProficiencyCard: FC<Props> = ({ name, value }: Props) => {
    return (
        <div>
            {name} : {value}
        </div>
    )
}

export default ProficiencyCard
