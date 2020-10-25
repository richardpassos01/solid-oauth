import { Router } from 'express';

import { createAuthenticateController } from '@application/factories/authenticate/Create';
import { refreshAuthenticateController } from '@application/factories/authenticate/Refresh';

export default function authenticationRoutes(router: Router): void {
  router.post('/authenticate/', (Request, Response) => createAuthenticateController.handle(Request, Response));

  router.post('/authenticate/refresh', (Request, Response) => refreshAuthenticateController.handle(Request, Response));
}
