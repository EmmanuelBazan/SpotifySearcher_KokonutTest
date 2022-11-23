/** Modelo de autentificacion. */
export interface Authentication {
  /** Token de acceso necesario para consumir la API de Spotify. */
  access_token: string;
  /** La manera en la que debe usarse el accesss_token, siempre "Bearer". */
  token_type: string;
  /** Una lista de "scopes" que se han otorgado para este "access_token". */
  scope: string;
  /** Periodo de tiempo en segundos en el que el token sera valido */
  expires_in: number;
  /** Token que puede ser enviado al servicio de Spotify para renovar el "access_token" */
  refresh_token: string;
}
