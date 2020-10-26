import { createController } from '@application/factories/userRole/Create';
import { fetchController } from '@application/factories/userRole/Fetch';
import { Router } from 'express';
import { jwt } from '@config';
import authentication from '../../middlewares/authentication';
import authorization from '../../middlewares/authorization';

export default function userRoutes(router: Router): void {
  router.post('/user-role',
    authentication,
    authorization(
      jwt.roles.admin,
      jwt.roles.superadmin,
    ),
    (Request, Response) => createController.handle(Request, Response));

  router.get('/user-role/:userId',
    authentication,
    authorization(
      jwt.roles.superadmin,
    ),
    (Request, Response) => fetchController.handle(Request, Response));
}
