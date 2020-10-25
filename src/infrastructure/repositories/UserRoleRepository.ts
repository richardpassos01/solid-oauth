import { Creatable, Fetchable } from '@business/UserRole/Repository';
import UserRole from '@business/UserRole/UserRole';
import GenericDatabase from './GenericDatabase';

export default class UserRoleRepository implements Creatable, Fetchable {
  constructor(
    private queryBuilder: GenericDatabase<UserRole>,
    private tableName: string,
  ) {}

  async create({
    id,
    role_id,
    user_id,
  }: UserRole): Promise<void> {
    await this.queryBuilder(this.tableName).insert({
      id,
      role_id,
      user_id,
    });
  }

  async fetch(userId: string): Promise<UserRole[]> {
    return this.queryBuilder.select('*')
      .from(this.tableName)
      .where('user_id', userId);
  }
}
