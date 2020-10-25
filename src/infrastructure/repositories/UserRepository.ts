import { Creatable, Fetchable, FetchableByEmail } from '@root/src/business/User/Repository';
import User from '@business/User/User';
import GenericDatabase from './GenericDatabase';

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

  async create({
    id, name, email, document, username, hash, salt,
  }: User): Promise<void> {
    return this.queryBuilder(this.tableName).insert({
      id,
      name,
      email,
      username,
      document,
      salt,
      hash,
    });
  }

  async fetch(id: string): Promise<User> {
    const users = await this.queryBuilder.select('*')
      .from(this.tableName)
      .where('id', id);

    return users[0];
  }
}
