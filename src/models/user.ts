export default class User {
  public readonly id: string
  name: string
  email: string
  password: string

  constructor(id: string, name: string, email: string, password: string) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
  }
}
