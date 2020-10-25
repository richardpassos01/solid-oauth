export default interface Authenticate {
  token_type: string,
  access_token: string;
  refresh_token_in: string;
  token_expires_in: string;
  refresh_token_expires: string;
}
