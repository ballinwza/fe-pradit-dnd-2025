import { FC } from 'react'

interface Props {
    short: string
    value: number
}

const StatusCard: FC<Props> = ({ short, value }: Props) => {
    const calculateIndicatrt = (indicaterPoint: number): string => {
        const calculation: number = Math.round((indicaterPoint - 10) / 2)

        if (value < 10) {
            return calculation.toString()
        }

        if (calculation === 0) {
            return calculation.toString()
        }

        return `+${calculation}`
    }
    return (
        <div className="relative border p-4 text-center">
            <div className="text-2xl">{value}</div>
            <div className="text-lg">{short.toUpperCase()}</div>
            <div className="text-2xl absolute -bottom-8 bg-red-200 rounded-full">
                <div className="flex justify-center p-2">
                    {calculateIndicatrt(value)}
                </div>
            </div>
        </div>
    )
}

export default StatusCard
