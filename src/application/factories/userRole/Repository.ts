import UserRoleRepository from '@infrastructure/repositories/UserRoleRepository';
import { connection } from '@database/relational';
import { database } from '@config';
import { Fetchable, Creatable } from '@business/UserRole/Repository';

const queryBuilder = connection();

const repository = new UserRoleRepository(queryBuilder, database.relational.tables.userRoles);

export function userRoleFetcher(): Fetchable {
  return repository;
}

export function userRoleCreator(): Creatable {
  return repository;
}
