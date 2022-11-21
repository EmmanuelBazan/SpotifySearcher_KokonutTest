import { Authentication } from "../../../domain/model/Authentication";
import AuthenticationDataSource from "../AuthenticationDataSource";
import { AuthenticationAPIEntity } from "./entity/AuthenticationAPIEntity";

const BASE_URL = "https://accounts.spotify.com/api/token";
const CLIENT_ID = 'b666fc8cd91c4f2a952ff2c67b6a81e8';
const URL_CALLBACK = 'spotifysearcher://login/';
const CLIENT_SECRET = 'c23753ee0e3a497d986813e9a3a0ae35';

const commonParams = {
  redirect_uri: URL_CALLBACK,
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET
}

interface TypedResponse<T = any> extends Response {
  json<P = T>(): Promise<P>;
}

async function myFetch<T>(code: string): Promise<TypedResponse<T>> {

  const params: any = {
    code,
    grant_type: 'authorization_code',
    ...commonParams
  };

  const searchParams = Object.keys(params).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key])).join("&");

  console.log("SEARCH PARAMS ---> ",searchParams);

  return fetch(BASE_URL,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: searchParams
      })
  .then((res) => {
    return res
  })
  .catch((err) => {
    console.error("ERROR GET TOKEN ---> ",err);
    return err
  })

}

class AuthenticationAPIDataSourceImpl implements AuthenticationDataSource {

    async getAuthenticationToken(code: string): Promise<Authentication> {
        let response = await myFetch<AuthenticationAPIEntity>(code);
        let data = await response.json();
        return data;
    }

}

export default AuthenticationAPIDataSourceImpl;