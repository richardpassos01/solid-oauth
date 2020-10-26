import Verify from '@business/User/use-cases/Verify';

import { userFetcher } from './Repository';
import { fetchUseCase } from '../userRole/Fetch';

const verifyUseCase = new Verify(
  userFetcher(),
  fetchUseCase,
);

export {
  verifyUseCase,
};
