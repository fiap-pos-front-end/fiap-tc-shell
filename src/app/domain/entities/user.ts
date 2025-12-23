export class User {
  private constructor(
    public readonly email: string,
    public readonly password: string,
  ) {}

  static create(data: { email: string; password: string }): User {
    return new User(data.email, data.password);
  }
}
