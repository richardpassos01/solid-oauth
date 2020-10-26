import { Creatable, FetchableByUserAndRoleId } from '../Repository';
import UserRole, { DataTransferObjectUserRole } from '../UserRole';

export default class Create {
  constructor(
    private readonly creator: Creatable,
    private readonly fetcherByIds: FetchableByUserAndRoleId,
  ) { }

  async execute(data: DataTransferObjectUserRole): Promise<any> {
    const roleAlredyExists = data.role_id
      && await this.fetcherByIds.fetchByIds(data.user_id, data.role_id);

    if (roleAlredyExists) {
      throw new Error('Role already attributed to user');
    }

    const userRole = new UserRole(data);

    return this.creator.create(userRole);
  }
}
