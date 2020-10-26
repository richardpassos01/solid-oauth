import jsonwebtoken from 'jsonwebtoken';
import { jwt } from '@config';

import {
  Request,
  Response,
  NextFunction,
} from 'express';

export default function authentication(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    response.sendStatus(401);
  }

  const token = authHeader.split(' ')[1];

  jsonwebtoken.verify(token, jwt.accessTokenSecret, (err, user): any => {
    if (err) {
      return response.sendStatus(403);
    }

    request.user = user;
    return next();
  });
}
