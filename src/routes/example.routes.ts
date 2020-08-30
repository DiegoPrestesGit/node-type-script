import { Router } from 'express'
import ExampleController from '../controllers/ExampleController' 

const exampleRouter = Router()

const exampleController = new ExampleController()

exampleRouter.get('/', exampleController.index)
exampleRouter.post('/', exampleController.create)
exampleRouter.put('/:id', exampleController.update)
exampleRouter.delete('/:id', exampleController.delete)

export default exampleRouter
