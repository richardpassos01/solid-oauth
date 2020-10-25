import Verify from '@business/User/use-cases/Verify';

import { userFetcher } from './Repository';

const verifyUseCase = new Verify(
  userFetcher(),
);

export {
  verifyUseCase,
};
