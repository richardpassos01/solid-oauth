import { Fetchable } from '../Repository';
import { DataTransferObjectFetcherUserRole } from '../UserRole';

export default class Fetch {
  constructor(
    private readonly fetcher: Fetchable,
  ) { }

  async execute(
    userId: string,
  ): Promise<DataTransferObjectFetcherUserRole[]> {
    return this.fetcher.fetch(userId);
  }
}
