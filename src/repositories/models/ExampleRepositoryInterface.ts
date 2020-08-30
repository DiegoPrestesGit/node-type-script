import ExampleModel from '../../models/Example'
import ExampleDTO from '../../dtos/ExampleDTO'

export default interface ExampleRepositoryInterface {
  create(data: ExampleDTO): Promise<ExampleModel>
  readAllExamples(): Promise<ExampleModel[]>
  updateExample(data: ExampleDTO): Promise<ExampleModel>
  deleteExample(id: string): void
}
