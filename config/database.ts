import env from 'env-var';

const required = process.env.NODE_ENV !== 'test';

const database = Object.freeze({
  relational: {
    connection: env.get('DATABASE_RELATIONAL_CONNECTION').required(required).asString(),
    tables: {
      partners: 'users',
    },
  },
});

export default database;
