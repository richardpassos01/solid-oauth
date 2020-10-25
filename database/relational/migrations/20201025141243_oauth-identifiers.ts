import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTableIfNotExists('oauth_identifiers', (table) => {
      table
        .increments('id')
        .primary();

      table
        .string('name', 50)
        .notNullable();

      table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('oauth_identifiers');
}
