import ExampleModel from '../../models/example'
import ExampleRepository from '../../repositories/example-repository'

interface RequestDTO {
  name: string
  email: string
}

export default class {
  public async execute(
    exampleRepository: ExampleRepository,
    { name, email }: RequestDTO
  ): Promise<ExampleModel> {
    const example = exampleRepository.create({ name, email })

    return example
  }
}
