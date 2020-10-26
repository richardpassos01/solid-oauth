import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('oauth_users').del();

  await knex('oauth_users').insert([
    {
      id: 'c1daef5f-4bd0-4616-bb62-794e9b5d8ca2',
      name: 'admin',
      email: 'admin@admin',
      username: 'admin001',
      document: 92811841091,
      salt: '6d8e72d5fd2c4e914e746d104fadf914',
      hash: 'd091c78f8c364c2b84b19014c6c08fde708e800953689b6ef217a0de9ef2baee6952cbd4d05213014af9e4f24fc8fe80fbd88f1f7fcb2475aaf791805edb8e23'
    },
  ]);
}
