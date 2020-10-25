import { Fetchable } from '../Repository';
import User from '../User';

export default class Fetch {
  constructor(
    private readonly fetcher: Fetchable,
  ) { }

  async execute(
    identifierValue: string,
    identifierType: string,
  ): Promise<User> {
    return this.fetcher.fetch({
      [identifierType]: identifierValue,
    });
  }
}
