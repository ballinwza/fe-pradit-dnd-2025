import { IArmor } from '../domains/armor.domain'
import { ArmorMapper } from '../mappers/armor.mapper'
import { IArmorRepository } from '../repositories/armor.repository'

export class GetArmorListUsecase {
    constructor(private readonly armorRepository: IArmorRepository) {}

    async handle(): Promise<IArmor[]> {
        try {
            const armorList = await this.armorRepository.getArmorList()

            const result = armorList.map((armor) =>
                new ArmorMapper().armorEntityToDomain(armor),
            )
            return result
        } catch (error) {
            console.error('GetArmorListUsecase.handle Error : ', error)
            throw error
        }
    }
}
