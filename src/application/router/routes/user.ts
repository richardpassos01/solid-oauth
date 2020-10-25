import { createController } from '@application/factories/user/Create';
import { fetchUserController } from '@application/factories/user/Fetch';

import { Router } from 'express';

export default function userRoutes(router: Router): void {
  router.post('/users', (Request, Response) => createController.handle(Request, Response));

  router.get('/user/:id', (Request, Response) => fetchUserController.handle(Request, Response));
}
