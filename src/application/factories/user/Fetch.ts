import FetchUserCase from '@root/src/business/User/use-cases/Fetch';
import FetchController from '@root/src/application/controllers/user/FetchController';

import { userFetcher } from './Repository';

const fetchUseCase = new FetchUserCase(
  userFetcher(),
);

const fetchUserController = new FetchController(
  fetchUseCase,
);

export {
  fetchUseCase,
  fetchUserController,
};
