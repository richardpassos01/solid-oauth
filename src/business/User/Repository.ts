import { GenericCreatable, GenericFetchableByEmail, GenericFetchable, GenericValidatable } from '../shared/Contracts';
import User, { UserIdentifier, UserPassword } from './User';

export type Creatable = GenericCreatable<User>;

export type FetchableByEmail = GenericFetchableByEmail<string, User>;

export type Fetchable = GenericFetchable<string, User>;

export type Validatable = GenericValidatable<UserIdentifier, UserPassword, User>;
