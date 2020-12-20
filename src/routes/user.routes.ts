import { Router } from 'express'
import UserController from '../controllers/user-controller'

const userRouter = Router()

const userController = new UserController()

userRouter.get('/', userController.index)
userRouter.post('/', userController.create)
userRouter.put('/:id', userController.update)
userRouter.delete('/:id', userController.delete)

export default userRouter
