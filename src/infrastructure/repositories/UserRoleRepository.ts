import { Creatable, Fetchable, FetchableByUserAndRoleId } from '@business/UserRole/Repository';
import UserRole from '@business/UserRole/UserRole';
import GenericDatabase from './GenericDatabase';

export default class UserRoleRepository implements Creatable, Fetchable, FetchableByUserAndRoleId {
  constructor(
    private queryBuilder: GenericDatabase<UserRole>,
    private tableName: string,
    private joinTableName: string,
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
    return this.queryBuilder(this.tableName)
      .join(this.joinTableName, `${this.joinTableName}.id`, `${this.tableName}.role_id`)
      .select('name', 'role_id')
      .where('user_id', userId);
  }

  async fetchByIds(userId: string, roleId: string): Promise<UserRole> {
    const role = await this.queryBuilder.select('*')
      .from(this.tableName)
      .where('user_id', userId)
      .andWhere('role_id', roleId);

    return role[0];
  }
}
