import { Coin, CoinShortType } from '@graphql/generated/graphql'
import { ICoin, ICoinShortType } from '../domains/coin.domain'

export class CoinMapper {
    public coinEntityToDomain(entity: Coin): ICoin {
        return {
            name: entity.name,
            shortType: this.coinShortTypeEntityToDomain(entity.shortType),
            value: entity.value,
        }
    }

    public coinShortTypeEntityToDomain(entity: CoinShortType): ICoinShortType {
        switch (entity) {
            case CoinShortType.Cp:
                return ICoinShortType.CP
            case CoinShortType.Sp:
                return ICoinShortType.SP
            case CoinShortType.Ep:
                return ICoinShortType.EP
            case CoinShortType.Gp:
                return ICoinShortType.GP
            case CoinShortType.Pp:
                return ICoinShortType.PP
        }
    }
}
