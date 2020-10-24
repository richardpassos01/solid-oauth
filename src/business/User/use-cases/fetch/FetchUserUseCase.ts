import { Fetchable } from '../UserRepository';
import { FetchUserDTORequestDTO } from './FetchUserDTO';
import User from '../../User';

export default class FetchUserUserCase {
  constructor(
    private readonly fetcher: Fetchable,
  ) { }

  async execute(data: FetchUserDTORequestDTO): Promise<User> {
    return this.fetcher.fetch(data.id);
  }
}
