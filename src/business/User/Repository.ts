import {
  GenericCreatable,
  GenericFetchable,
  GenericFetchableByIdentifiers,
  GenericUseCase,
} from '../shared/Contracts';

import UserRole from '../UserRole/use-cases/Create';
import { DataTransferObjectUserRole } from '../UserRole/UserRole';
import User, { UserIdentifier } from './User';

export type Creatable = GenericCreatable<User>;

export type FetchableByIdentifiers = GenericFetchableByIdentifiers<string, string, number, User>;

export type Fetchable = GenericFetchable<UserIdentifier, User>;

export type CreatableRole = GenericUseCase<DataTransferObjectUserRole, UserRole>;
