import { createController } from '@application/factories/userRole/Create';
import { fetchController } from '@application/factories/userRole/Fetch';

import { Router } from 'express';

export default function userRoutes(router: Router): void {
  router.post('/user-role', (Request, Response) => createController.handle(Request, Response));

  router.get('/user-role/:userId', (Request, Response) => fetchController.handle(Request, Response));
}
