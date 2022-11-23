import AuthenticationRepository from "../../repository/AuthenticationRepository";

/** Interfaz para el caso de uso `GetAuthenticationToken` */
export interface GetAuthenticationTokenUseCase {

    /**
     * Obtener token de acceso
     * @param code - codigo para intercambiar por el token de acceso
     * @returns (void)
     */
    invoke(code: string): void;
}

/** Caso de uso que implementa de `GetAuthenticationTokenUseCase`  */
export class GetAuthenticationToken implements GetAuthenticationTokenUseCase {
    private authenticationRepository: AuthenticationRepository;

    constructor(_authenticationRepository: AuthenticationRepository){
        this.authenticationRepository = _authenticationRepository;
    }

    /**
     * Invocar funcion del repositorio
     * @param code - codigo para intercambiar por el token de acceso
     * @returns Funcion getAuthenticationToken de la instancia de repositorio
     */
    async invoke(code: string) {
        return this.authenticationRepository.getAuthenticationToken(code);
    }

}