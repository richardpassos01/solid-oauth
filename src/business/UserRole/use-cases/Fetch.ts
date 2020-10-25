import { Fetchable } from '../Repository';
import UserRole from '../UserRole';

export default class Fetch {
  constructor(
    private readonly fetcher: Fetchable,
  ) { }

  async execute(
    userId: string,
  ): Promise<UserRole[]> {
    return this.fetcher.fetch(userId);
  }
}
