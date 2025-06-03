import { IUser } from '@features/user/services/domain/user.domain'

export interface ICharacter {
    id: string
    name: string
    avatarImage: string
    speed: number
    initiativePoint: number
    hitDice: number
    user: IUser
}
