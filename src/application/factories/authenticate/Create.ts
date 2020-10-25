import CreateAuthenticateUserCase from '@business/Authenticate/use-cases/Create';
import CreateAuthenticateController from '@application/controllers/authenticate/CreateController';

import { verifyUseCase } from '../user/Verify';

const createAuthenticateUseCase = new CreateAuthenticateUserCase();

const createAuthenticateController = new CreateAuthenticateController(
  createAuthenticateUseCase,
  verifyUseCase,
);

export {
  createAuthenticateUseCase,
  createAuthenticateController,
};
