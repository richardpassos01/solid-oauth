import env from 'env-var';

const required = process.env.NODE_ENV !== 'test';

const database = Object.freeze({
  relational: {
    connection: {
      host: env.get('DATABASE_HOST').required(required).asString(),
      user: env.get('DATABASE_USER').required(required).asString(),
      password: env.get('DATABASE_PASSWORD').required(required).asString(),
      database: env.get('DATABASE_NAME').required(required).asString(),
    },
    tables: {
      user: 'oauth_users',
      identifier: 'oauth_identifiers',
      roles: 'oauth_roles',
      userRoles: 'oauth_user_roles',
    },
  },
});

export default database;
