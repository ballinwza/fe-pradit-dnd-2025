import { IWeapon } from '../domains/weapon.domain'
import { WeaponMapper } from '../mappers/weapon.mapper'
import { IWeaponRepository } from '../repositories/weapon.repository'

export class GetWeaponListUsecase {
    constructor(private readonly weaponRepository: IWeaponRepository) {}

    async handle(): Promise<IWeapon[]> {
        try {
            const weaponList = await this.weaponRepository.getWeaponList()

            const result = weaponList.map((weapon) =>
                new WeaponMapper().weaponEntityToDomain(weapon),
            )
            return result
        } catch (error) {
            console.error('GetWeaponListUsecase.handle Error : ', error)
            throw error
        }
    }
}
