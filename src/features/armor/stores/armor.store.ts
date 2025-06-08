import { create } from 'zustand'
import { IArmor, IArmorType } from '../services/domains/armor.domain'
import { ArmorRepository } from '../services/repositories/armor.repository'
import { GetArmorListUsecase } from '../services/usecases/getArmorList.usecase'
import { ArmorMapper } from '../services/mappers/armor.mapper'

interface ArmorState {
    armorList: IArmor[] | null
    lightArmor: IArmor[] | null
    mediumArmor: IArmor[] | null
    heavyArmor: IArmor[] | null
    fetchArmorList: () => void
    clearArmor: () => void
}

export const useArmorStore = create<ArmorState>((set) => ({
    armorList: null,
    lightArmor: null,
    mediumArmor: null,
    heavyArmor: null,
    fetchArmorList: async () => {
        const repo = new ArmorRepository()
        const usecase = new GetArmorListUsecase(repo)

        const result = await usecase.handle()

        const light = result.filter(
            (armor) => armor.armorType === IArmorType.light,
        )
        const medium = result.filter(
            (armor) => armor.armorType === IArmorType.medium,
        )
        const heacy = result.filter(
            (armor) => armor.armorType === IArmorType.heavy,
        )

        set(() => ({
            armorList: result,
            lightArmor: light,
            mediumArmor: medium,
            heavyArmor: heacy,
        }))
    },
    clearArmor: () => {
        set(() => ({
            armorList: null,
            lightArmor: null,
            mediumArmor: null,
            heavyArmor: null,
        }))
    },
}))
