import ExampleModel from '../../models/example'
import ExampleRepository from '../../repositories/example-repository'
import ExampleDTO from '../../dtos/example-dto'

export default class {
  public async execute(
    exampleRepository: ExampleRepository,
    { id, name, email }: ExampleDTO
  ): Promise<ExampleModel> {
    const example = exampleRepository.updateExample({ id, name, email })

    return example
  }
}
