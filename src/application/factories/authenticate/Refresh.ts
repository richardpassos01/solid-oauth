import RefreshAuthenticateUserCase from '@root/src/business/Authenticate/use-cases/Refresh';
import RefreshAuthenticateController from '@application/controllers/authenticate/RefreshController';
import { createAuthenticateUseCase } from './Create';

const refreshAuthenticateUseCase = new RefreshAuthenticateUserCase(createAuthenticateUseCase);

const refreshAuthenticateController = new RefreshAuthenticateController(
  refreshAuthenticateUseCase,
);

export {
  refreshAuthenticateController,
};
