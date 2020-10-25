import { createController } from '@application/factories/user/Create';
import { fetchController } from '@application/factories/user/Fetch';

import { Router } from 'express';

export default function userRoutes(router: Router): void {
  router.post('/users', (Request, Response) => createController.handle(Request, Response));

  router.get('/user/:id', (Request, Response) => fetchController.handle(Request, Response));
}
