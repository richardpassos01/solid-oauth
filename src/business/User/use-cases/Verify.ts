import { Fetchable, FetchbleRole } from '../Repository';
import User, { UserIdentifier, UserPassword } from '../User';

export default class Verify {
  constructor(
    private readonly fetcher: Fetchable,
    private readonly fetcherRole: FetchbleRole,

  ) { }

  async execute(identifier: UserIdentifier, password: UserPassword): Promise<User> {
    const verifyUser = await this.fetcher.fetch(identifier);

    const verifyedUser = new User(verifyUser, verifyUser.id);

    const isValidPassword = verifyedUser.validPassword(password);

    if (!isValidPassword) {
      throw new Error('Invalid password or identifier');
    }

    const userRoles = await this.fetcherRole.execute(verifyedUser.id);

    return verifyedUser;
  }
}
