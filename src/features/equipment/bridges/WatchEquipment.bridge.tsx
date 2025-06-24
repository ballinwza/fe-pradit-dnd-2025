import { useSubscription } from '@apollo/client'
import {
    WatchEquipmentByCharacterIdResponseDocument,
    WatchEquipmentByCharacterIdResponseSubscription,
} from '@graphql/generated/graphql'
import { FC, useEffect } from 'react'
import { useEquipmentStore } from '../stores/equipment.store'
import { ArmorMapper } from '@features/armor/services/mappers/armor.mapper'
import { WeaponMapper } from '@features/weapon/services/mappers/weapon.mapper'

const armorMapper = new ArmorMapper()
const weaponMapper = new WeaponMapper()

const WatchEquipmentBridge: FC = () => {
    const { body, leftHanded, rightHanded, setEquipment } = useEquipmentStore(
        (state) => state,
    )

    const { data, loading, error } = useSubscription(
        WatchEquipmentByCharacterIdResponseDocument,
        {
            variables: { characterId: '6839b9ad34d38e31825f2ba2' },
        },
    )

    useEffect(() => {
        // if (loading) setLoading()
        // if (error) setError(error.message)
        if (data) {
            const {
                watchEquipmentByCharacterId: EquipmentData,
            }: WatchEquipmentByCharacterIdResponseSubscription = data

            const armorModel = armorMapper.armorEntityToDomain(
                EquipmentData.armor,
            )
            const leftHandModel = weaponMapper.weaponEntityToDomain(
                EquipmentData.leftHanded,
            )
            const rightHandModel = weaponMapper.weaponEntityToDomain(
                EquipmentData.rightHanded,
            )

            const hasChanged =
                JSON.stringify(armorModel) !== JSON.stringify(body) ||
                JSON.stringify(leftHandModel) !== JSON.stringify(leftHanded) ||
                JSON.stringify(rightHandModel) !== JSON.stringify(rightHanded)

            if (hasChanged)
                setEquipment(leftHandModel, armorModel, rightHandModel)
        }
    }, [data, error])

    return <></>
}

export default WatchEquipmentBridge
