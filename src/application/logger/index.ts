import Debug from 'debug';

const debug = Debug('TS-PROJECT:');

const date = new Date();

const error = (info: string, err: Error): void => {
  debug('ERROR', {
    info,
    err,
    date,
  });
};

const log = (info: string): void => {
  debug('LOG', {
    info,
    date,
  });
};

export default {
  error,
  log,
};
