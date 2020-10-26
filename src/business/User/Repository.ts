import {
  GenericCreatable,
  GenericFetchable,
  GenericFetchableByIdentifiers,
  GenericUseCase,
} from '../shared/Contracts';

import UserRole, { DataTransferObjectUserRole, DataTransferObjectFetcherUserRole } from '../UserRole/UserRole';
import User, { UserIdentifier } from './User';

export type Creatable = GenericCreatable<User>;

export type FetchableByIdentifiers = GenericFetchableByIdentifiers<string, string, number, User>;

export type Fetchable = GenericFetchable<UserIdentifier, User>;

export type CreatableRole = GenericUseCase<DataTransferObjectUserRole, UserRole>;

export type FetchableRole = GenericUseCase<string, DataTransferObjectFetcherUserRole[]>;
