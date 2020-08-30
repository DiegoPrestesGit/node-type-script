import ExampleModel from '../../models/Example'
import ExampleRepository from '../../repositories/ExampleRepository'

export default class {
  public async execute (exampleRepository: ExampleRepository): Promise<ExampleModel[]> {

    const allExamples = await exampleRepository.readAllExamples()

    return allExamples
  }
}
