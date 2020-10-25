import Fetch from '@business/User/use-cases/Fetch';
import FetchController from '@application/controllers/user/FetchController';

import { userFetcher } from './Repository';

const fetchUseCase = new Fetch(
  userFetcher(),
);

const fetchController = new FetchController(
  fetchUseCase,
);

export {
  fetchUseCase,
  fetchController,
};
