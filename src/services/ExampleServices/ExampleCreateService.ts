import ExampleModel from '../../models/Example'
import ExampleRepository from '../../repositories/ExampleRepository'

interface RequestDTO {
  name: string
  email: string
}

export default class {
  public async execute (exampleRepository: ExampleRepository, {name, email}: RequestDTO): Promise<ExampleModel> {

    const example = exampleRepository.create({name, email})

    return example
  }
}
