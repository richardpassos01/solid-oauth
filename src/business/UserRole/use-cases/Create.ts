import { Creatable } from '../Repository';
import UserRole, { DataTransferObjectUserRole } from '../UserRole';

export default class Create {
  constructor(
    private readonly creator: Creatable,
  ) { }

  async execute(data: DataTransferObjectUserRole): Promise<void> {
    const userRole = new UserRole(data);

    return this.creator.create(userRole);
  }
}
