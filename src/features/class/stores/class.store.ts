import { create } from 'zustand'
import { IClass } from '../services/domains/class.domain'
import { getClassLiseUsecaseAsNewClass } from '../services/usecases/getClassList.usecase'

import { isEmpty } from 'radash'

interface ClassState {
    classList: IClass[] | null
    fetchClassList: () => void
}

export const useClassStore = create<ClassState>((set, get) => ({
    classList: null,
    fetchClassList: async () => {
        const classList = await getClassLiseUsecaseAsNewClass.handle()

        if (!isEmpty(classList)) {
            set(() => ({
                classList,
            }))
        }
    },
}))
