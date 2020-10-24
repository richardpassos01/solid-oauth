import Router from 'express';
import { createUserController } from '@application/factories/user/create';
import { fetchUserController } from '@application/factories/user/fetch';

const router = Router();

router.post('/users', (Request, Response) => createUserController.handle(Request, Response));

router.get('/user/:id', (Request, Response) => fetchUserController.handle(Request, Response));

export default router;
