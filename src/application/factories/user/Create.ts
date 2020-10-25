import Create from '@root/src/business/User/use-cases/Create';
import MailTrapMailProvider from '@infrastructure/providers/mailtrap/MailTrapMailProvider';
import CreateController from '@root/src/application/controllers/user/CreateController';
import { userFetcherByEmail, userCreator } from './Repository';

const mailTrapMailProvider = new MailTrapMailProvider();

const createUseCase = new Create(
  userFetcherByEmail(),
  userCreator(),
  mailTrapMailProvider,
);

const createController = new CreateController(
  createUseCase,
);

export {
  createUseCase,
  createController,
};
