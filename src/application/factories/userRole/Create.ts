import Create from '@business/UserRole/use-cases/Create';
import CreateController from '@application/controllers/userRole/CreateController';
import { userRoleCreator } from './Repository';

const createUseCase = new Create(
  userRoleCreator(),
);

const createController = new CreateController(
  createUseCase,
);

export {
  createUseCase,
  createController,
};
