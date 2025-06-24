import { create } from 'zustand'
import { IEquipment } from '../services/domain/equipment.domain'
import { EquipmentRepository } from '../services/repositories/equipment.repository'
import { GetEquipmentByCharacterIdUsecase } from '../services/usecase/getEquipmentByCharacterId.usecase'
import { IArmor } from '@features/armor/services/domains/armor.domain'
import { IWeapon } from '@features/weapon/services/domains/weapon.domain'

interface EquipmentState {
    body: IArmor | null
    leftHanded: IWeapon | null
    rightHanded: IWeapon | null
    fetchEquipmentByCharacterId: (characterId: string) => void
    setEquipment: (left: IWeapon, body: IArmor, right: IWeapon) => void
    clearEquipment: () => void
    // setLoading()
}
const repo = new EquipmentRepository()
const usecase = new GetEquipmentByCharacterIdUsecase(repo)

export const useEquipmentStore = create<EquipmentState>((set) => ({
    body: null,
    leftHanded: null,
    rightHanded: null,
    fetchEquipmentByCharacterId: async (characterId: string) => {
        const result = await usecase.handle(characterId)

        set(() => ({
            body: result.armor,
            leftHanded: result.leftHanded,
            rightHanded: result.rightHanded,
        }))
    },
    setEquipment: (left: IWeapon, body: IArmor, right: IWeapon) => {
        set(() => ({
            leftHanded: left,
            body,
            rightHanded: right,
        }))
    },
    clearEquipment: () => {
        set(() => ({
            body: null,
            leftHanded: null,
            rightHanded: null,
        }))
    },
}))
