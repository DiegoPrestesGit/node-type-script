import { v4 as uuidv4 } from 'uuid'

import ExampleRepositoryInterface from './models/ExampleRepositoryInterface'
import ExampleDTO from '../dtos/ExampleDTO'
import ExampleModel from '../models/Example'
import AppError from '../errors/AppError'

export default class ExampleRepository implements ExampleRepositoryInterface {
  private examples: ExampleModel[] = []

  public async create({name, email}: ExampleDTO): Promise<ExampleModel> {
    const example = new ExampleModel()

    Object.assign(example, {id: uuidv4(), name, email})

    this.examples.push(example)

    return example
  }

  public async readAllExamples(): Promise<ExampleModel[]> {
    return this.examples
  }

  public async updateExample({id, name, email}: ExampleDTO): Promise<ExampleModel> {
    const example = new ExampleModel()

    const exampleForIndexOf = this.examples.find(ex => ex.id === id)

    if(exampleForIndexOf){
      const indexOf = this.examples.indexOf(exampleForIndexOf, 0)

      Object.assign(example, {id: exampleForIndexOf.id, name, email})
  
      this.examples[indexOf] = example
    }else{
      throw new AppError('Cannot find the example by his ID.')
    }

     return example
  }

  public async deleteExample(id: string): Promise<void> {
    const exampleForIndexOf = this.examples.find(ex => ex.id === id)

    if(exampleForIndexOf){
      const indexOf = this.examples.indexOf(exampleForIndexOf, 0)
      this.examples.splice(indexOf)
    }else{
      throw new AppError('Cannot find the example by his ID.')
    }

  }
}
