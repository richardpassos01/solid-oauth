import { MailProvider } from '@business/shared/MailProvider';
import { Creatable, FetchableByEmail } from '../UserRepository';
import User, { DataTransferObjectUser } from '../../User';

export default class CreateUserUserCase {
  constructor(
    private readonly fetcher: FetchableByEmail,
    private readonly creator: Creatable,
    private readonly mailProvider: MailProvider,
  ) { }

  async execute(data: DataTransferObjectUser): Promise<void> {
    const userAlreadyExists = await this.fetcher.fetchByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const user = new User(data);

    await this.creator.create(user);

    await this.mailProvider.sendEmail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: 'teste',
        email: 'teste@teste.com',
      },
      body: '<p>You read this email</p>',
      subject: 'Read this email',
    });
  }
}
