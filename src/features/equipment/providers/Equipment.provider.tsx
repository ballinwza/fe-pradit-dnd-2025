'use client'

import { Button } from '@mui/material'
import Link from 'next/link'
import { FC, useEffect } from 'react'
import { useEquipmentStore } from '../stores/equipment.store'

import ArmorCard from '@features/armor/components/ArmorCard'
import WeaponCard from '@features/weapon/components/WeaponCard'
import WatchEquipmentBridge from '../bridges/WatchEquipment.bridge'

const EquipmentProvider: FC = () => {
    const { leftHanded, rightHanded, body } = useEquipmentStore(
        (state) => state,
    )

    return (
        <div>
            <WatchEquipmentBridge />
            <Link href="/character">
                <Button>Back</Button>
            </Link>

            <div className="grid grid-cols-3 gap-4">
                <WatchEquipmentBridge />
                <div>
                    {leftHanded && (
                        <WeaponCard
                            key={leftHanded.id}
                            title={leftHanded.name}
                            diceQuantity={leftHanded.diceQuantity}
                            mastery={leftHanded.mastery}
                            propertyList={leftHanded.property}
                            price={leftHanded.price}
                            descriptionEn={leftHanded.descriptionEn}
                            descriptionTh={leftHanded.descriptionTh}
                            weight={leftHanded.weight}
                            imageUrl={leftHanded.imageUrl}
                            diceRollType={leftHanded.diceRollType}
                            damageType={leftHanded.damagedType}
                            normalRange={leftHanded?.normalRange}
                            longRange={leftHanded?.longRange}
                        />
                    )}
                </div>
                <div>
                    {body && (
                        <ArmorCard
                            key={body.id}
                            id={body.id}
                            name={body.name}
                            armorClass={body.armorClass}
                            armorType={body.armorType}
                            maximumPlusArmorClass={body.maximumPlusArmorClass}
                            stealthAdvantage={body.stealthAdvantageType.toString()}
                            price={body.price}
                            strRequirement={body.strRequirement}
                            descriptionEn={body.descriptionEn}
                            weight={body.weight}
                            imageUrl={body.imageUrl}
                        />
                    )}
                </div>
                <div>
                    {rightHanded && (
                        <WeaponCard
                            key={rightHanded.id}
                            title={rightHanded.name}
                            diceQuantity={rightHanded.diceQuantity}
                            mastery={rightHanded.mastery}
                            propertyList={rightHanded.property}
                            price={rightHanded.price}
                            descriptionEn={rightHanded.descriptionEn}
                            descriptionTh={rightHanded.descriptionTh}
                            weight={rightHanded.weight}
                            imageUrl={rightHanded.imageUrl}
                            diceRollType={rightHanded.diceRollType}
                            damageType={rightHanded.damagedType}
                            normalRange={rightHanded?.normalRange}
                            longRange={rightHanded?.longRange}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default EquipmentProvider
