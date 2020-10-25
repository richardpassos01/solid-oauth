import CreateAuthenticateUserCase from '@business/Authenticate/use-cases/Create';
import CreateAuthenticateController from '@application/controllers/authenticate/CreateController';

const createAuthenticateUseCase = new CreateAuthenticateUserCase();

const createAuthenticateController = new CreateAuthenticateController(
  createAuthenticateUseCase,
);

export {
  createAuthenticateUseCase,
  createAuthenticateController,
};
