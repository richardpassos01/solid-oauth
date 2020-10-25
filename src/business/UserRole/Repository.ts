import {
  GenericCreatable,
  GenericFetchable,
} from '../shared/Contracts';

import UserRole from './UserRole';

export type Creatable = GenericCreatable<UserRole>;

export type Fetchable = GenericFetchable<string, UserRole[]>;
