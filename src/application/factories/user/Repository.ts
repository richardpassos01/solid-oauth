import UserRepository from '@infrastructure/repositories/UserRepository';
import { connection } from '@database/relational';
import { database } from '@config';
import { Fetchable, FetchableByIdentifiers, Creatable } from '@business/User/Repository';

const queryBuilder = connection();

const repository = new UserRepository(queryBuilder, database.relational.tables.user);

export function userFetcherByIdentifiers(): FetchableByIdentifiers {
  return repository;
}

export function userFetcher(): Fetchable {
  return repository;
}

export function userCreator(): Creatable {
  return repository;
}
