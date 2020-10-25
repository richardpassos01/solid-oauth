import { Fetchable } from '../Repository';
import User, { FetchDataTransferObjectUser } from '../User';

export default class Fetch {
  constructor(
    private readonly fetcher: Fetchable,
  ) { }

  async execute(data: FetchDataTransferObjectUser): Promise<User> {
    return this.fetcher.fetch(data.id);
  }
}
