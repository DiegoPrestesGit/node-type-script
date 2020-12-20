import UserModel from '../../models/user'
import UserDTO from '../../dtos/user-dto'

export default interface IUserRepository {
  create(data: UserDTO): Promise<UserModel>
  readAllUsers(): Promise<UserModel[]>
  updateUser(data: UserDTO): Promise<UserModel>
  deleteUser(id: string): void
}
