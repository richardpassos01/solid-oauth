import { createUserController } from '@application/factories/user/create';
import { fetchUserController } from '@application/factories/user/fetch';

import { Router } from 'express';

export default function userRoutes(router: Router): void {
  router.post('/users', (Request, Response) => createUserController.handle(Request, Response));

  router.get('/user/:id', (Request, Response) => fetchUserController.handle(Request, Response));
}
