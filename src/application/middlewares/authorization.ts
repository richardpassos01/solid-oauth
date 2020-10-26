import {
  Request,
  Response,
  NextFunction,
} from 'express';

export default function authorization(...permittedRoles: string[]) {
  return (
    request: Request,
    response: Response,
    next: NextFunction,
  ): any => {
    const { user } = request;

    const isEnabledToOperate = user && user.roles.find(({ name }) => permittedRoles.includes(name));

    if (!isEnabledToOperate) {
      return response.sendStatus(403);
    }

    return next();
  };
}
