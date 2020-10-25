import { Router } from 'express';

export function loadIn(router: Router): void {
  router.post('/authenticate/', (Request, Response) => console.log('ola'));

  router.post('authenticate/refresh', (Request, Response) => console.log('ola'));
}
