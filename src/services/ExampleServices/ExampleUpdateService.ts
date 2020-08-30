import ExampleModel from '../../models/Example'
import ExampleRepository from '../../repositories/ExampleRepository'
import ExampleDTO from '../../dtos/ExampleDTO'

export default class {
  public async execute (exampleRepository: ExampleRepository,{id, name, email}: ExampleDTO): Promise<ExampleModel> {

    const example = exampleRepository.updateExample({id, name, email})

    return example
  }
}
