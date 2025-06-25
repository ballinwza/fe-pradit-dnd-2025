import { IEquipment } from '../domain/equipment.domain'
import { EquipmetMapper } from '../mapper/equipment.mapper'
import { IEquipmentRepository } from '../repositories/equipment.repository'

export class GetEquipmentByCharacterIdUsecase {
    constructor(private readonly equipmentRepository: IEquipmentRepository) {}

    async handle(characterId: string): Promise<IEquipment> {
        const equipmentEntity =
            await this.equipmentRepository.getEquipmentByCharacterId(
                characterId,
            )
        const result = new EquipmetMapper().equipmentEntityToDomain(
            equipmentEntity,
        )

        return result
    }
}
