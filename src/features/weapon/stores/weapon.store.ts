import { create } from 'zustand'
import { IWeapon } from '../services/domains/weapon.domain'
import { WeaponRepository } from '../services/repositories/weapon.repository'
import { GetWeaponListUsecase } from '../services/usecases/getWeaponList.usecase'

interface WeaponState {
    weaponList: IWeapon[] | null
    fetchWeapon: () => void
    clearWeapon: () => void
}

export const useWeaponStore = create<WeaponState>((set) => ({
    weaponList: null,
    fetchWeapon: async () => {
        const repo = new WeaponRepository()
        const usecase = new GetWeaponListUsecase(repo)

        const result = await usecase.handle()

        set(() => ({
            weaponList: result,
        }))
    },
    clearWeapon: () => {
        set(() => ({
            weaponList: null,
        }))
    },
}))
