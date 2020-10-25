import {
  GenericCreatable,
  GenericFetchable,
  GenericFetchableByIdentifiers,
} from '../shared/Contracts';

import User, { UserIdentifier, UserPassword } from './User';

export type Creatable = GenericCreatable<User>;

export type FetchableByIdentifiers = GenericFetchableByIdentifiers<string, string, number, User>;

export type Fetchable = GenericFetchable<UserIdentifier, User>;

