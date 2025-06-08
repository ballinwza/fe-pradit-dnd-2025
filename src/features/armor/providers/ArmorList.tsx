'use client'
import { FC, useEffect } from 'react'
import { useArmorStore } from '../stores/armor.store'
import ArmorCard from '../components/ArmorCard'

const ArmorList: FC = () => {
    const { lightArmor, mediumArmor, heavyArmor, fetchArmorList, clearArmor } =
        useArmorStore((state) => state)

    useEffect(() => {
        fetchArmorList()

        return () => {
            clearArmor()
        }
    }, [])

    return (
        <div className="flex flex-col gap-10 py-4 px-10">
            <div>
                <h2>Light Armor</h2>
                <div className="grid grid-cols-4 gap-10">
                    {lightArmor &&
                        lightArmor.map((armor) => (
                            <ArmorCard
                                key={armor.id}
                                id={armor.id}
                                name={armor.name}
                                armorClass={armor.armorClass}
                                armorType={armor.armorType}
                                maximumPlusArmorClass={
                                    armor.maximumPlusArmorClass
                                }
                                stealthAdvantage={armor.stealthAdvantageType.toString()}
                                price={armor.price}
                                strRequirement={armor.strRequirement}
                                descriptionEn={armor.descriptionEn}
                                weight={armor.weight}
                                imageUrl={armor.imageUrl}
                            />
                        ))}
                </div>
            </div>

            <div>
                <h2>Medium Armor</h2>
                <div className="grid grid-cols-4 gap-10">
                    {mediumArmor &&
                        mediumArmor.map((armor) => (
                            <ArmorCard
                                key={armor.id}
                                id={armor.id}
                                name={armor.name}
                                armorClass={armor.armorClass}
                                armorType={armor.armorType}
                                maximumPlusArmorClass={
                                    armor.maximumPlusArmorClass
                                }
                                stealthAdvantage={armor.stealthAdvantageType.toString()}
                                price={armor.price}
                                strRequirement={armor.strRequirement}
                                descriptionEn={armor.descriptionEn}
                                weight={armor.weight}
                                imageUrl={armor.imageUrl}
                            />
                        ))}
                </div>
            </div>

            <div>
                <h2>Heavy Armor</h2>
                <div className="grid grid-cols-4 gap-10">
                    {heavyArmor &&
                        heavyArmor.map((armor) => (
                            <ArmorCard
                                key={armor.id}
                                id={armor.id}
                                name={armor.name}
                                armorClass={armor.armorClass}
                                armorType={armor.armorType}
                                maximumPlusArmorClass={
                                    armor.maximumPlusArmorClass
                                }
                                stealthAdvantage={armor.stealthAdvantageType.toString()}
                                price={armor.price}
                                strRequirement={armor.strRequirement}
                                descriptionEn={armor.descriptionEn}
                                weight={armor.weight}
                                imageUrl={armor.imageUrl}
                            />
                        ))}
                </div>
            </div>
        </div>
    )
}

export default ArmorList
