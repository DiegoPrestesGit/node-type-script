import { Request, Response } from 'express'

import UserListService from '../services/user-services/user-list-service'
import UserCreateService from '../services/user-services/user-create-service'
import UserUpdateService from '../services/user-services/user-update-service'
import UserDeleteService from '../services/user-services/user-delete-service'
import UserRepository from '../repositories/user-repository'

const userRepository = new UserRepository()

export default class UserController {
  public async index(_: Request, response: Response): Promise<Response> {
    const userList = new UserListService()

    const allUsers = await userList.execute(userRepository)

    return response.json(allUsers)
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body

    const userCreate = new UserCreateService()
    const user = await userCreate.execute(userRepository, {
      name,
      email,
      password
    })

    return response.json(user)
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { name, email, password } = request.body
    const userCreate = new UserUpdateService()

    const updatedUser = await userCreate.execute(userRepository, {
      id,
      name,
      email,
      password
    })

    return response.json(updatedUser)
  }

  public async delete(request: Request, response: Response): Promise<void> {
    const { id } = request.params

    const userDelete = new UserDeleteService()

    await userDelete.execute(userRepository, id)

    response.status(200).json()
  }
}
