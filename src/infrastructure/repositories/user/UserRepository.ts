import { Creatable, Fetchable, FetchableByEmail } from '@business/User/use-cases/UserRepository';
import User from '@business/User/User';
import GenericDatabase from '../GenericDatabase';

export default class UserRepository implements Creatable, Fetchable, FetchableByEmail {
  constructor(
    private queryBuilder: GenericDatabase<User>,
    private tableName: string,
  ) {}

  async fetchByEmail(email: string): Promise<User> {
    const users = await this.queryBuilder.select('*')
      .from(this.tableName)
      .where('email', email);

    return users[0];
  }

  async create(user: User): Promise<void> {
    await this.queryBuilder(this.tableName).insert({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    });
  }

  async fetch(id: string): Promise<User> {
    const users = await this.queryBuilder.select('*')
      .from(this.tableName)
      .where('id', id);

    return users[0];
  }
}
