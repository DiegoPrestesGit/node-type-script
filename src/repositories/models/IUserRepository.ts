import UserModel from '../../models/User'
import UserDTO from '../../dtos/UserDTO'

export default interface IUserRepository {
  create(data: UserDTO): Promise<UserModel>
  readAllUsers(): Promise<UserModel[]>
  updateUser(data: UserDTO): Promise<UserModel>
  deleteUser(id: string): void
}
