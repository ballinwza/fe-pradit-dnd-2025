import { IAdvantageType } from '@features/core/services/domains/advantage.domain'
import { ICoin } from '@features/core/services/domains/coin.domain'
import { IWeight } from '@features/core/services/domains/weight.domain'
import Image from 'next/image'
import { FC } from 'react'

interface Props {
    id: string
    armorType: string
    name: string
    armorClass: number
    maximumPlusArmorClass: number
    stealthAdvantage: string
    price: ICoin
    strRequirement?: number
    descriptionEn: string
    weight: IWeight
    imageUrl: string
}
const ArmorCard: FC<Props> = ({
    id,
    armorClass,
    armorType,
    maximumPlusArmorClass,
    name,
    stealthAdvantage,
    strRequirement,
    price,
    descriptionEn,
    weight,
    imageUrl,
}: Props) => {
    return (
        <div className="border-[1px]">
            <div>
                <Image
                    className="w-full h-auto"
                    alt={name}
                    src={imageUrl}
                    width={200}
                    height={150}
                />
            </div>

            <div className="px-3 py-2">
                <div className="font-bold text-lg">{name}</div>
                <div>Armor Type : {armorType}</div>
                <div>
                    {stealthAdvantage !== IAdvantageType.NONE &&
                        `Stealth Advantage : ${stealthAdvantage}`}
                </div>
                <div>Armor Class : {armorClass}</div>
                <div>Maximum Plus AC : {maximumPlusArmorClass}</div>
                <div>Strength Requirement : {strRequirement}</div>
                <div>Weight : {`${weight.value} ${weight.unit}`}</div>
                <div>
                    Price : {price.value} {price.shortType}
                </div>
                <div>Description : {descriptionEn}</div>
            </div>
        </div>
    )
}

export default ArmorCard
