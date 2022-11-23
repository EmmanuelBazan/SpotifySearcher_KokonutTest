import AuthenticationDataSource from "../AuthenticationDataSource";
import { AuthenticationAPIEntity } from "./entity/AuthenticationAPIEntity";
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = "https://accounts.spotify.com/api/token";
const CLIENT_ID = 'b666fc8cd91c4f2a952ff2c67b6a81e8';
const URL_CALLBACK = 'spotifysearcher://login/';
const CLIENT_SECRET = 'c23753ee0e3a497d986813e9a3a0ae35';

const commonParams = {
  redirect_uri: URL_CALLBACK,
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET
}

/** Interface que describe la respuesta de la funcion `myFetch()` */
interface TypedResponse<T = any> extends Response {
  json<P = T>(): Promise<P>;
}

/**
 * Hacer un fetch a la API de Spotify
 * @param code - codigo para intercambiar por el token de acceso
 * @returns Promesa con objeto
 */
async function myFetch<T>(code: string): Promise<TypedResponse<T>> {

  const params: any = {
    code,
    grant_type: 'authorization_code',
    ...commonParams
  };

  const searchParams = Object.keys(params).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key])).join("&");

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

/**
 * Guardar token de acceso en `AsyncStorage`
 * @param token - token de acceso para la API
 * @returns (void)
 */
async function saveToken(token: string){
  await AsyncStorage.setItem('@storage_token', token)
}

/** Clase que implementa de la interfaz de nuestro origen de datos */
class AuthenticationAPIDataSourceImpl implements AuthenticationDataSource {

  /**
   * Obtener token de acceso para la API
   * @param code - codigo para intercambiar por el token de acceso
   * @returns (void)
   */
    async getAuthenticationToken(code: string) {
        let response = await myFetch<AuthenticationAPIEntity>(code);
        let data = await response.json();
        await saveToken(data.access_token);
    }

}

export default AuthenticationAPIDataSourceImpl;