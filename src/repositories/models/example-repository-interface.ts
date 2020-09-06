import ExampleModel from '../../models/example'
import ExampleDTO from '../../dtos/example-dto'

export default interface ExampleRepositoryInterface {
  create(data: ExampleDTO): Promise<ExampleModel>
  readAllExamples(): Promise<ExampleModel[]>
  updateExample(data: ExampleDTO): Promise<ExampleModel>
  deleteExample(id: string): void
}
