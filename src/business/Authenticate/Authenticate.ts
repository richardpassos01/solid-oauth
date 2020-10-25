export type Token = string;

export default interface Authenticate {
  token_type: string,
  access_token: Token;
  refresh_token: string;
  access_token_expires_in: string;
  refresh_token_expires_in: string;
}
