import { Fetchable } from '../Repository';
import User, { UserId } from '../User';

export default class Fetch {
  constructor(
    private readonly fetcher: Fetchable,
  ) { }

  async execute(data: UserId): Promise<User> {
    return this.fetcher.fetch(data.id);
  }
}
