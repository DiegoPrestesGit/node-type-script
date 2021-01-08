import UserModel from '../../models/User'
import UserRepository from '../../repositories/UserRepository'
import UserDTO from '../../dtos/UserDTO'

export default class {
  public async execute(
    userRepository: UserRepository,
    { id, name, email, password }: UserDTO
  ): Promise<UserModel> {
    const user = userRepository.updateUser({ id, name, email, password })
    return user
  }
}
