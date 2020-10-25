import { Creatable, FetchableByEmail } from '../Repository';
import User, { DataTransferObjectUser, ID } from '../User';

export default class Create {
  constructor(
    private readonly fetcher: FetchableByEmail,
    private readonly creator: Creatable,
  ) { }

  async execute(data: DataTransferObjectUser): Promise<ID> {
    const userAlreadyExists = await this.fetcher.fetchByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const { password, ...userParams } = data;

    const user = new User(userParams);

    user.setPassword(password);

    await this.creator.create(user);

    return user.id;
  }
}
