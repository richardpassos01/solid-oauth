import { Fetchable, FetchableRole } from '../Repository';
import User, { UserIdentifier, UserPassword } from '../User';

export default class Verify {
  constructor(
    private readonly fetcher: Fetchable,
    private readonly fetcherRole: FetchableRole,

  ) { }

  async execute(identifier: UserIdentifier, password: UserPassword): Promise<any> {
    const verifyUser = await this.fetcher.fetch(identifier);

    const verifyedUser = new User(verifyUser, verifyUser.id);

    const isValidPassword = verifyedUser.validPassword(password);

    if (!isValidPassword) {
      throw new Error('Invalid password or identifier');
    }

    const userRoles = await this.fetcherRole.execute(verifyedUser.id);

    return {
      id: verifyedUser.id,
      name: verifyedUser.name,
      email: verifyedUser.email,
      username: verifyedUser.username,
      document: verifyedUser.document,
      roles: userRoles,
    };
  }
}
