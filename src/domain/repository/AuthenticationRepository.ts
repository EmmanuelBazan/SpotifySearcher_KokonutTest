/** Repositorio del modelo Authentication */
export default interface AuthenticationRepository {

    /**
     * Obtener token de acceso
     * @param code - codigo para intercambiar por el token de acceso
     * @returns (void)
     */
    getAuthenticationToken(code: string): void;
}