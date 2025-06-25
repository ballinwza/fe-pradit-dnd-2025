import { ICoin } from '@features/core/services/domains/coin.domain'
import { IWeight } from '@features/core/services/domains/weight.domain'
import { FC } from 'react'
import {
    IWeaponMastery,
    IWeaponProperty,
} from '../services/domains/weapon.domain'
import Image from 'next/image'
import { IconButton, Tooltip } from '@mui/material'
import { capitalize } from 'radash'

interface Props {
    title: string
    diceQuantity: number
    mastery: IWeaponMastery
    propertyList: IWeaponProperty[]
    price: ICoin
    descriptionEn?: string
    descriptionTh?: string
    weight: IWeight
    imageUrl: string
    diceRollType: string
    damageType: string
    normalRange?: number
    longRange?: number
}
const WeaponCard: FC<Props> = ({
    title,
    diceQuantity,
    mastery,
    propertyList,
    price,
    descriptionEn,
    descriptionTh,
    weight,
    imageUrl,
    diceRollType,
    damageType,
    normalRange,
    longRange,
}: Props) => {
    return (
        <div className="border-[1px]">
            <div>
                <Image
                    className="w-full"
                    src={imageUrl}
                    alt={title}
                    width={2400}
                    height={2400}
                />
            </div>
            <div>Title: {capitalize(title)}</div>
            <div>
                Damage: {diceQuantity}
                {diceRollType}
            </div>
            <div>Damaged Type: {capitalize(damageType)}</div>
            <div>
                <div className="p-0.5 border-[1px] w-[70px] rounded-full overflow-hidden bg-gray-300">
                    <Tooltip
                        title={
                            <div>
                                <h2 className="text-2xl">
                                    Mastery : {capitalize(mastery.name)}
                                </h2>
                                <div className="text-lg">
                                    {mastery.descriptionTh}
                                </div>
                            </div>
                        }
                    >
                        <IconButton>
                            <Image
                                className="w-full"
                                src={mastery.imageUrl}
                                alt={mastery.name}
                                width={500}
                                height={500}
                            />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
            <div className="flex flex-row gap-4">
                {propertyList.map((property) => (
                    <div
                        key={property.id}
                        className="p-0.5 border-[1px] w-[70px] rounded-full overflow-hidden bg-gray-300"
                    >
                        <Tooltip
                            title={
                                <div>
                                    <h2 className="text-2xl">
                                        Property : {capitalize(property.name)}
                                    </h2>
                                    <div className="text-lg">
                                        {property.descriptionTh}
                                    </div>
                                </div>
                            }
                        >
                            <IconButton>
                                <Image
                                    className="w-full"
                                    src={
                                        property.imageUrl === ''
                                            ? '/images/babarian.png'
                                            : property.imageUrl
                                    }
                                    alt={property.name}
                                    width={500}
                                    height={500}
                                />
                            </IconButton>
                        </Tooltip>
                    </div>
                ))}
            </div>
            {normalRange || longRange ? (
                <div>
                    Range: {normalRange}/{longRange} feet
                </div>
            ) : undefined}
            <div>
                Price: {price.value} {price.shortType}
            </div>
            <div>
                Weight: {weight.value} {weight.unit}
            </div>
            <div>Description: {descriptionTh}</div>
        </div>
    )
}

export default WeaponCard
