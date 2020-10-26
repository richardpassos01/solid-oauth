import {
  GenericCreatable,
  GenericFetchable,
  GenericFetchableByIds,
} from '../shared/Contracts';

import UserRole from './UserRole';

export type Creatable = GenericCreatable<UserRole>;

export type Fetchable = GenericFetchable<string, UserRole[]>;

export type FetchableByUserAndRoleId = GenericFetchableByIds<string, string, UserRole>;
