import { v4 as uuid } from 'uuid';

export interface DataTransferObjectUserRole {
  user_id: string;
  role_id?: string;
}

export default class UserRole {
  public readonly id: string;

  public user_id: string;

  public role_id: string;

  constructor(props: Omit<UserRole, 'id' | 'role_id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
