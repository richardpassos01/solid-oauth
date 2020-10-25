import UserRepository from '@root/src/infrastructure/repositories/UserRepository';
import { connection } from '@database/relational';
import { database } from '@config';
import { Fetchable, FetchableByEmail, Creatable } from '@root/src/business/User/Repository';

const queryBuilder = connection();

const repository = new UserRepository(queryBuilder, database.relational.tables.user);

export function userFetcherByEmail(): FetchableByEmail {
  return repository;
}

export function userFetcher(): Fetchable {
  return repository;
}

export function userCreator(): Creatable {
  return repository;
}
