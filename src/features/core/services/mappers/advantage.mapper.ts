import { AdvantageType } from '@graphql/generated/graphql'
import { IAdvantageType } from '../domains/advantage.domain'

export class AdvantageMapper {
    public advantageTypeEntityToDomain(entity: AdvantageType): IAdvantageType {
        switch (entity) {
            case AdvantageType.Advantage:
                return IAdvantageType.ADVANTAGE
            case AdvantageType.None:
                return IAdvantageType.NONE
            case AdvantageType.Disadvantage:
                return IAdvantageType.DISADVANTAGE
        }
    }

    public advantageTypeDomainToEntity(domain: IAdvantageType): AdvantageType {
        switch (domain) {
            case IAdvantageType.ADVANTAGE:
                return AdvantageType.Advantage
            case IAdvantageType.NONE:
                return AdvantageType.None
            case IAdvantageType.DISADVANTAGE:
                return AdvantageType.Disadvantage
        }
    }
}
