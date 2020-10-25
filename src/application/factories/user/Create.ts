import Create from '@business/User/use-cases/Create';
import CreateController from '@application/controllers/user/CreateController';
import { userFetcherByIdentifiers, userCreator } from './Repository';

const createUseCase = new Create(
  userFetcherByIdentifiers(),
  userCreator(),
);

const createController = new CreateController(
  createUseCase,
);

export {
  createUseCase,
  createController,
};
