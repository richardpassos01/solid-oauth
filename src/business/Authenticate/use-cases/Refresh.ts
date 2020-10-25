import jsonwebtoken from 'jsonwebtoken';
import { promisify } from 'util';
import { jwt } from '@config';
import Authenticate, { Token } from '../Authenticate';
import { Creatable } from '../Repository';

const verifyToken: any = promisify(jsonwebtoken.verify);

export default class Refresh {
  constructor(
    private readonly creator: Creatable,
  ) {}

  async execute(refreshToken: Token): Promise<Authenticate> {
    if (!refreshToken) {
      throw new Error('Missing Token');
    }

    const { iat, exp, ...user } = await verifyToken(refreshToken, jwt.refreshTokenSecret);

    return this.creator.execute(user);
  }
}
