import { FC } from 'react'

interface Props {
    short: string
    value: number
    indicaterNumber: number
}

const StatusCard: FC<Props> = ({ short, value, indicaterNumber }: Props) => {
    const chkIndicater = (): string => {
        if (value > 11) return `+${indicaterNumber}`
        if (value < 10) return `-${indicaterNumber}`

        return '0'
    }

    return (
        <div className="relative border p-4 text-center">
            <div className="text-2xl">{value}</div>
            <div className="text-lg">{short.toUpperCase()}</div>
            <div className="text-2xl absolute -bottom-8 bg-red-200 rounded-full">
                <div className="flex justify-center p-2">{chkIndicater()}</div>
            </div>
        </div>
    )
}

export default StatusCard
