import CreateUserUserCase from '@business/User/use-cases/create/CreateUserUseCase';
import MailTrapMailProvider from '@infrastructure/providers/mailtrap/MailTrapMailProvider';
import CreateUserController from '@application/controllers/user/create/CreateUserController';
import { userFetcherByEmail, userCreator } from '../repository';

const mailTrapMailProvider = new MailTrapMailProvider();

const createUserUseCase = new CreateUserUserCase(
  userFetcherByEmail(),
  userCreator(),
  mailTrapMailProvider,
);

const createUserController = new CreateUserController(
  createUserUseCase,
);

export {
  createUserUseCase,
  createUserController,
};
