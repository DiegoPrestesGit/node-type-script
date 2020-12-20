import UserRepository from '../../repositories/user-repository'

export default class {
  public async execute(
    userRepository: UserRepository,
    id: string
  ): Promise<void> {
    await userRepository.deleteUser(id)
  }
}
