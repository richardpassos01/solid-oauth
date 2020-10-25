import { DataTransferObjectUser } from '@business/User/User';
import jsonwebtoken from 'jsonwebtoken';
import { jwt } from '@config';

import Authenticate from '../Authenticate';

export default class Create {
  async execute(user: DataTransferObjectUser): Promise<Authenticate> {
    const accessToken = jsonwebtoken.sign({ ...user }, jwt.accessTokenSecret,
      { expiresIn: jwt.timeToExpireAccessToken });

    const refreshToken = jsonwebtoken.sign({ ...user }, jwt.refreshTokenSecret,
      { expiresIn: jwt.timeToExpireRefreshToken });

    return {
      token_type: 'bearer',
      access_token: accessToken,
      refresh_token: refreshToken,
      access_token_expires_in: jwt.timeToExpireAccessToken,
      refresh_token_expires_in: jwt.timeToExpireRefreshToken,
    };
  }
}
