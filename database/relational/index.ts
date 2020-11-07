import Knex from 'knex';
import { database } from '../../config';
import logger from '../../src/application/logger';

export const config = {
  client: 'mysql2',
  connection: database.relational.connection,
  migrations: {
    directory: `${__dirname}/migrations`,
  },
  seeds: {
    directory: `${__dirname}/seeds`,
  },
};

const instance: Knex = Knex(config as Knex.Config);

instance
  .raw('select 1')
  .then(() => {
    logger.log('Connected to database - OK');
  })
  .catch((err) => {
    logger.error('Failed to connect to database', err);
    process.exit(1);
  });

export const connection = (): typeof instance => instance;

export const timestamp = (): string => new Date().toUTCString();
