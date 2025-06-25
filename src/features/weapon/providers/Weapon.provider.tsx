'use client'
import { FC, useEffect } from 'react'
import { useWeaponStore } from '../stores/weapon.store'
import WeaponCard from '../components/WeaponCard'
import Link from 'next/link'

const WeaponProvier: FC = () => {
    const { weaponList, fetchWeapon, clearWeapon } = useWeaponStore(
        (state) => state,
    )

    useEffect(() => {
        fetchWeapon()

        return () => {
            clearWeapon()
        }
    }, [])

    return (
        <div>
            <div>
                <Link href="/character">Back</Link>
            </div>
            <div className="grid grid-cols-3 gap-10">
                {weaponList &&
                    weaponList.map((weapon) => (
                        <WeaponCard
                            key={weapon.id}
                            title={weapon.name}
                            diceQuantity={weapon.diceQuantity}
                            mastery={weapon.mastery}
                            propertyList={weapon.property}
                            price={weapon.price}
                            descriptionEn={weapon.descriptionEn}
                            descriptionTh={weapon.descriptionTh}
                            weight={weapon.weight}
                            imageUrl={weapon.imageUrl}
                            diceRollType={weapon.diceRollType}
                            damageType={weapon.damagedType}
                            normalRange={weapon?.normalRange}
                            longRange={weapon?.longRange}
                        />
                    ))}
            </div>
        </div>
    )
}

export default WeaponProvier
