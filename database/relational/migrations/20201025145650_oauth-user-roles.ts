import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTableIfNotExists('oauth_user_roles', (table) => {
      table
        .uuid('id')
        .primary();

      table
        .uuid('user_id')
        .references('oauth_users.id')
        .onDelete('CASCADE')
        .notNullable();

      table
        .integer('role_id')
        .unsigned()
        .references('oauth_roles.id')
        .onDelete('CASCADE')
        .defaultTo(1)
        .notNullable();

      table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('oauth_user_roles');
}
