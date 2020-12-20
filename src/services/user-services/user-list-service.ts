import UserModel from '../../models/user'
import UserRepository from '../../repositories/user-repository'

export default class {
  public async execute(userRepository: UserRepository): Promise<UserModel[]> {
    const allUsers = await userRepository.readAllUsers()

    return allUsers
  }
}
