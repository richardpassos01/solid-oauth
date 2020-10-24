import FetchUserUserCase from '@business/User/use-cases/fetch/FetchUserUseCase';
import FetchUserController from '@application/controllers/user/fetch/FetchUserController';

import { userFetcher } from '../repository';

const fetchUserUseCase = new FetchUserUserCase(
  userFetcher(),
);

const fetchUserController = new FetchUserController(
  fetchUserUseCase,
);

export {
  fetchUserUseCase,
  fetchUserController,
};
