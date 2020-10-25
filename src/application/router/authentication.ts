import { Router } from 'express';

import { createAuthenticateController } from '@application/factories/authenticate/Create';

export function loadIn(router: Router): void {
  router.post('/authenticate/', (Request, Response) => createAuthenticateController.handle(Request, Response));

  router.post('authenticate/refresh', (Request, Response) => console.log('ola'));
}
