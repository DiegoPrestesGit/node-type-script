import ExampleRepository from '../../repositories/example-repository'

export default class {
  public async execute(
    exampleRepository: ExampleRepository,
    id: string
  ): Promise<void> {
    exampleRepository.deleteExample(id)
  }
}
