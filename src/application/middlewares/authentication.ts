import jsonwebtoken from 'jsonwebtoken';
import { jwt } from '@config';

import {
  Request,
  Response,
  NextFunction,
} from 'express';

export default function authentication(
  request: Request | any,
  response: Response,
  next: NextFunction,
): any {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.sendStatus(401);
  }

  const token = authHeader.split(' ')[1];

  return jsonwebtoken.verify(token, jwt.accessTokenSecret, (err, user): any => {
    if (err) {
      return response.sendStatus(403);
    }

    request.user = user;
    return next();
  });
}
