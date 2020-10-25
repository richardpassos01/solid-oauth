import { Validatable } from '../Repository';
import User, { UserIdentifier, UserPassword } from '../User';

export default class Verify {
  constructor(
    private readonly validator: Validatable,
  ) { }

  async execute(identifier: UserIdentifier, password: UserPassword): Promise<User> {
    return this.validator.valid(identifier, password);
  }
}
