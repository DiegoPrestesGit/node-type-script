import UserModeel from '../../models/user'
import UserRepository from '../../repositories/user-repository'

interface RequestDTO {
  name: string
  email: string
  password: string
}

export default class {
  public async execute(
    userRepository: UserRepository,
    { name, email, password }: RequestDTO
  ): Promise<UserModeel> {
    const user = userRepository.create({ name, email, password })

    return user
  }
}
