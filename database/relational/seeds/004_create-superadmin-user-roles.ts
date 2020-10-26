import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('oauth_user_roles').del();

  await knex('oauth_user_roles').insert([
    {
      id: 'c85c3329-bac1-496a-b57f-2655dd4c31c3',
      user_id: 'c1daef5f-4bd0-4616-bb62-794e9b5d8ca2',
      role_id: 1,
    },
    {
      id: '3176d51c-f549-4de5-8124-792ae88ad631',
      user_id: 'c1daef5f-4bd0-4616-bb62-794e9b5d8ca2',
      role_id: 2,
    },
    {
      id: '3fc4b046-f1b0-4561-a879-8ee58158ae68',
      user_id: 'c1daef5f-4bd0-4616-bb62-794e9b5d8ca2',
      role_id: 3,
    },
  ]);
}
