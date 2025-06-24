import { create } from 'zustand'
import { IClass } from '../services/domains/class.domain'
import { ClassRepository } from '../services/repositories/class.repository'
import { GetClassListUsecase } from '../services/usecases/getClassList.usecase'

interface ClassState {
    classList: IClass[] | null
    fetchClassList: () => void
}

const classRepository = new ClassRepository()
const getClassListUsecase = new GetClassListUsecase(classRepository)

export const useClassStore = create<ClassState>((set) => ({
    classList: null,
    fetchClassList: async () => {
        const classList = await getClassListUsecase.handle()

        set(() => ({
            classList,
        }))
    },
}))
