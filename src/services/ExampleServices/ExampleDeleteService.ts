import ExampleRepository from '../../repositories/ExampleRepository'

export default class {
  public async execute (exampleRepository: ExampleRepository, { id }): Promise<void> {
    exampleRepository.deleteExample(id)

  }
}
