import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('oauth_roles').del();

  await knex('oauth_roles').insert([
    { name: 'user' },
    { name: 'admin' },
    { name: 'superadmin' },
  ]);
}
