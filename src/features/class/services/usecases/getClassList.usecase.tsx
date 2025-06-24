import { IClass } from '../domains/class.domain'
import { ClassMapper } from '../mappers/class.mapper'
import { IClassRepository } from '../repositories/class.repository'

const classMapper = new ClassMapper()
export class GetClassListUsecase {
    constructor(private readonly classRepository: IClassRepository) {}

    async handle(): Promise<IClass[]> {
        const classEntity = await this.classRepository.getClassList()
        const result: IClass[] = classEntity.map((classItem) =>
            classMapper.classEntityToDomain(classItem),
        )

        return result
    }
}
