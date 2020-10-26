import {
  GenericCreatable,
  GenericFetchable,
  GenericFetchableByIds,
} from '../shared/Contracts';

import UserRole, { DataTransferObjectFetcherUserRole } from './UserRole';

export type Creatable = GenericCreatable<UserRole>;

export type Fetchable = GenericFetchable<string, DataTransferObjectFetcherUserRole[]>;

export type FetchableByUserAndRoleId = GenericFetchableByIds<string, string, UserRole>;
