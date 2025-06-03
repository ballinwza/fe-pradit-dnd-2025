import { User } from '@graphql/generated/graphql'
import { IUser } from '../domain/user.domain'

export class UserMapper {
    public entityToDomain(entity: User): IUser {
        const domain: IUser = {
            id: entity._id,
            email: entity.email,
            displayName: entity.displayName,
            userImage: entity.userImage,
        }

        return domain
    }
}
