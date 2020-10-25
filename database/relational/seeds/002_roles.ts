import * as Knex from 'knex';
import { v4 as uuid } from 'uuid';

export async function seed(knex: Knex): Promise<void> {
  await knex('oauth_roles').del();

  await knex('oauth_roles').insert([
    { id: uuid(), name: 'admin' },
    { id: uuid(), name: 'superadmin' },
    { id: uuid(), name: 'user' },
  ]);
}
