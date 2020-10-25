import env from 'env-var';

const required = process.env.NODE_ENV !== 'test';

const jwt = Object.freeze({
  accessTokenSecret: env.get('OAUTH_API_ACCESS_TOKEN_SECRET').required(required).asString(),
  refreshTokenSecret: env.get('OAUTH_API_REFRESH_TOKEN_SECRET').required(required).asString(),
  timeToExpireAccessToken:
    `${env.get('OAUTH_API_ACCESS_TOKEN_EXPIRES_IN_HOURS').required(required).asIntPositive()}h`,
  timeToExpireRefreshToken:
    `${env.get('OAUTH_API_REFRESH_TOKEN_EXPIRES_IN_HOURS').required(required).asIntPositive()}h`,
});

export default jwt;
