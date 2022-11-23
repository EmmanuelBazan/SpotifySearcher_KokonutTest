/** Interfaz que describe los metodos de nuestro origen de datos. */
export default interface AuthenticationDataSource {
    /**
     * Obtener token de autentificacion para consumir la API
     * 
     * @param code - Codigo para intercambiar por el token de autentificacion
     * 
     * @returns (void)
     */
    getAuthenticationToken(code: string): void;
}