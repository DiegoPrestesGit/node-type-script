import UserModel from '../../models/User'
import UserRepository from '../../repositories/UserRepository'

export default class {
  public async execute(userRepository: UserRepository): Promise<UserModel[]> {
    const allUsers = await userRepository.readAllUsers()

    return allUsers
  }
}
