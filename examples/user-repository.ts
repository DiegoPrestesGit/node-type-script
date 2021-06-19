import { v4 as uuidv4 } from 'uuid'

import IUserRepository from '../src/repositories/models/IUserRepository'
import UserDTO from '../src/dtos/UserDTO'
import UserModel from '../models/User'
import AppError from './AppError'

export default class UserRepository implements IUserRepository {
  private users: UserModel[] = []

  public async create({ name, email, password }: UserDTO): Promise<UserModel> {
    const users = new UserModel(uuidv4(), name, email, password)

    this.users.push(users)

    return users
  }

  public async readAllUsers(): Promise<UserModel[]> {
    return this.users
  }

  public async updateUser({
    id,
    name,
    email,
    password
  }: UserDTO): Promise<UserModel> {
    const selectedUser = this.users.find(ex => ex.id === id)

    if (selectedUser) {
      const selectedIndex = this.users.indexOf(selectedUser)
      const user = new UserModel(selectedUser.id, name, email, password)
      this.users[selectedIndex] = user

      return user
    } else {
      throw new AppError('Cannot find the user by this ID.')
    }
  }

  public async deleteUser(id: string): Promise<void> {
    const selectedUser = this.users.find(ex => ex.id === id)

    if (selectedUser) {
      const selectedIndex = this.users.indexOf(selectedUser)
      this.users.splice(selectedIndex, 1)
    } else {
      throw new AppError('Cannot find the user by this ID.')
    }
  }
}
