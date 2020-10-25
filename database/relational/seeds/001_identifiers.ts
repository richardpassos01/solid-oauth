import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('oauth_identifiers').del();

  await knex('oauth_identifiers').insert([
    { name: 'document' },
    { name: 'username' },
    { name: 'email' },
  ]);
}
