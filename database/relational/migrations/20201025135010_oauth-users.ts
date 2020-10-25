import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTableIfNotExists('oauth_users', (table) => {
      table
        .uuid('id')
        .primary();

      table
        .string('name', 350)
        .notNullable();

      table
        .string('email', 50)
        .notNullable();

      table
        .string('username', 100)
        .notNullable();

      table
        .decimal('document', 14, 2)
        .notNullable();

      table
        .string('salt', 50)
        .notNullable();

      table
        .string('hash', 250)
        .notNullable();

      table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('oauth_users');
}
