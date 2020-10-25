import Create from '@root/src/business/User/use-cases/Create';
import CreateController from '@root/src/application/controllers/user/CreateController';
import { userFetcherByEmail, userCreator } from './Repository';

const createUseCase = new Create(
  userFetcherByEmail(),
  userCreator(),
);

const createController = new CreateController(
  createUseCase,
);

export {
  createUseCase,
  createController,
};
