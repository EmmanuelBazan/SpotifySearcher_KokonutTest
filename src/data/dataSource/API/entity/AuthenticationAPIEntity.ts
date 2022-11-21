export interface AuthenticationAPIEntity {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
  refresh_token: string;
  is_auth: boolean;
}
