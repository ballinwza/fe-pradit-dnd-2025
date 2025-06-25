import { IClass } from '../domains/class.domain'
import { newClassMapper } from '../mappers/class.mapper'

import {
    ClassRepository,
    IClassRepository,
} from '../repositories/class.repository'

class GetClassListUsecase {
    private readonly classRepository: IClassRepository

    constructor() {
        this.classRepository = new ClassRepository()
    }

    async handle(): Promise<IClass[]> {
        const classEntity = await this.classRepository.getClassList()
        const result: IClass[] = classEntity.map((classItem) =>
            newClassMapper.classEntityToDomain(classItem),
        )

        return result
    }
}

export const getClassLiseUsecaseAsNewClass = new GetClassListUsecase()
