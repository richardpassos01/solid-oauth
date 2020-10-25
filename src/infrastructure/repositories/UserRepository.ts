import { Creatable, Fetchable, FetchableByIdentifiers } from '@business/User/Repository';
import User, { UserIdentifier } from '@business/User/User';
import GenericDatabase from './GenericDatabase';

export default class UserRepository implements Creatable, Fetchable, FetchableByIdentifiers {
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

  async fetch(identifier: UserIdentifier): Promise<User> {
    const users = await this.queryBuilder.select('*')
      .from(this.tableName)
      .where(identifier);

    return users[0];
  }

  async fetchByIdentifiers(
    email: string,
    username: string,
    document: number,
  ): Promise<User> {
    const users = await this.queryBuilder.select('*')
      .from(this.tableName)
      .where('email', email)
      .orWhere('username', username)
      .orWhere('document', document);

    return users[0];
  }
}
