import Create from '@business/User/use-cases/Create';
import CreateController from '@application/controllers/user/CreateController';
import { userFetcherByIdentifiers, userCreator } from './Repository';
import { createUseCase as createUserRoleUseCase } from '../userRole/Create';

const createUseCase = new Create(
  userFetcherByIdentifiers(),
  userCreator(),
  createUserRoleUseCase,
);

const createController = new CreateController(
  createUseCase,
);

export {
  createUseCase,
  createController,
};
