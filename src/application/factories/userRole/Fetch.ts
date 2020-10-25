import Fetch from '@business/UserRole/use-cases/Fetch';
import FetchController from '@application/controllers/userRole/FetchController';

import { userRoleFetcher } from './Repository';

const fetchUseCase = new Fetch(
  userRoleFetcher(),
);

const fetchController = new FetchController(
  fetchUseCase,
);

export {
  fetchUseCase,
  fetchController,
};
