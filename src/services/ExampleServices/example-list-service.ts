import ExampleModel from '../../models/example'
import ExampleRepository from '../../repositories/example-repository'

export default class {
  public async execute(
    exampleRepository: ExampleRepository
  ): Promise<ExampleModel[]> {
    const allExamples = await exampleRepository.readAllExamples()

    return allExamples
  }
}
