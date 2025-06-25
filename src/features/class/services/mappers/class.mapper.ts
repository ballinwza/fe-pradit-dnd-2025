import { Class } from '@graphql/generated/graphql'
import { IClass } from '../domains/class.domain'

class ClassMapper {
    public classEntityToDomain(entity: Class): IClass {
        return {
            id: entity.id,
            name: entity.name,
            descriptionEn: entity.descriptionEn,
            descriptionTh: entity.descriptionTh,
            diceHpIncrease: entity.diceHpIncrease,
        }
    }
}

export const newClassMapper = new ClassMapper()
