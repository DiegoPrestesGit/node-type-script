import { Request, Response } from 'express'

import ExampleListService from '../services/ExampleServices/ExampleListService'
import ExampleCreateService from '../services/ExampleServices/ExampleCreateService'
import ExampleUpdateService from '../services/ExampleServices/ExampleUpdateService'
import ExampleDeleteService from '../services/ExampleServices/ExampleDeleteService'
import ExampleRepository from '../repositories/ExampleRepository'

const exampleRepository = new ExampleRepository()

export default class ExampleController {
  public async index (_: Request, response: Response): Promise<Response> {
    const exampleList = new ExampleListService()

    const allExamples = await exampleList.execute(exampleRepository)

    return response.json(allExamples)
  }

  public async create (request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body

    const exampleCreate = new ExampleCreateService()

    const example = await exampleCreate.execute(exampleRepository, { name, email })

    return response.json(example)
  }

  public async update (request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { name, email } = request.body

    const exampleCreate = new ExampleUpdateService()

    const updatedExample = await exampleCreate.execute(exampleRepository, { id, name, email })

    return response.json(updatedExample)
  }

  public async delete(request: Request, response: Response): Promise<void>{
    const { id } = request.params

    const exampleDelete = new ExampleDeleteService()
    
    await exampleDelete.execute(exampleRepository, { id });

    response.status(200).json()
  }
}
