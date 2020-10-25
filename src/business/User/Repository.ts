import { GenericCreatable, GenericFetchableByEmail, GenericFetchable } from '../shared/Contracts';
import User from './User';

export type Creatable = GenericCreatable<User>;

export type FetchableByEmail = GenericFetchableByEmail<string, User>;

export type Fetchable = GenericFetchable<string, User>;
