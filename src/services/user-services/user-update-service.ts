import UserModel from '../../models/user'
import UserRepository from '../../repositories/user-repository'
import UserDTO from '../../dtos/user-dto'

export default class {
  public async execute(
    userRepository: UserRepository,
    { id, name, email, password }: UserDTO
  ): Promise<UserModel> {
    const user = userRepository.updateUser({ id, name, email, password })
    return user
  }
}
