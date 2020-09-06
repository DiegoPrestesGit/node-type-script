import { v4 as uuidv4 } from 'uuid'

import ExampleRepositoryInterface from './models/example-repository-interface'
import ExampleDTO from '../dtos/example-dto'
import ExampleModel from '../models/example'
import AppError from '../errors/app-error'

export default class ExampleRepository implements ExampleRepositoryInterface {
  private examples: ExampleModel[] = []

  public async create({ name, email }: ExampleDTO): Promise<ExampleModel> {
    const example = new ExampleModel(uuidv4(), name, email)

    this.examples.push(example)

    return example
  }

  public async readAllExamples(): Promise<ExampleModel[]> {
    return this.examples
  }

  public async updateExample({
    id,
    name,
    email
  }: ExampleDTO): Promise<ExampleModel> {
    const selectedExample = this.examples.find(ex => ex.id === id)

    if (selectedExample) {
      const selectedIndex = this.examples.indexOf(selectedExample)

      const example = new ExampleModel(selectedExample.id, name, email)

      this.examples[selectedIndex] = example

      return example
    } else {
      throw new AppError('Cannot find the example by his ID.')
    }
  }

  public async deleteExample(id: string): Promise<void> {
    const selectedExample = this.examples.find(ex => ex.id === id)

    if (selectedExample) {
      const selectedIndex = this.examples.indexOf(selectedExample)
      this.examples.splice(selectedIndex)
    } else {
      throw new AppError('Cannot find the example by his ID.')
    }
  }
}
