import { Weight } from '@graphql/generated/graphql'
import { IWeight } from '../domains/weight.domain'

export class WeightMapper {
    public weightEntityToDomain(entity: Weight): IWeight {
        return {
            unit: entity.unit,
            value: entity.value,
        }
    }
}
