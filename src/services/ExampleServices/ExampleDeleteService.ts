import ExampleRepository from '../../repositories/ExampleRepository'

export default class {
  public async execute (exampleRepository: ExampleRepository, id: string): Promise<void> {
    exampleRepository.deleteExample(id)

  }
}
