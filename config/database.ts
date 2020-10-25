import env from 'env-var';

const required = process.env.NODE_ENV !== 'test';

const database = Object.freeze({
  relational: {
    connection: env.get('DATABASE_RELATIONAL_CONNECTION').required(required).asString(),
    tables: {
      user: 'oauth_users',
      identifier: 'oauth_identifiers',
      roles: 'oauth_roles',
      userRoles: 'oauth_user_roles',
    },
  },
});

export default database;
