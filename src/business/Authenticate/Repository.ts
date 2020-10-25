import { DataTransferObjectUser } from '@business/User/User';
import { GenericUseCase } from '../shared/Contracts';
import Authenticate from './Authenticate';

export type Creatable = GenericUseCase<DataTransferObjectUser, Authenticate>;
