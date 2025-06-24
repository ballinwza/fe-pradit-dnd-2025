import { DamagedType } from '@graphql/generated/graphql'
import { IDamagedType } from '../domains/damage.domain'

export class DamageMapper {
    public damagedTypeTypeEntityToDomain(entity: DamagedType): IDamagedType {
        switch (entity) {
            case DamagedType.Bludgeon:
                return IDamagedType.BLUDGEON
            case DamagedType.Pierce:
                return IDamagedType.PIERCE
            case DamagedType.Slash:
                return IDamagedType.SLASH
        }
    }
}
