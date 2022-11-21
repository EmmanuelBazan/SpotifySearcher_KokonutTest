import { Authentication } from "../../model/Authentication";
import AuthenticationRepository from "../../repository/AuthenticationRepository";

export interface GetAuthenticationTokenUseCase {
    invoke: (code: string) => void;
}

export class GetAuthenticationToken implements GetAuthenticationTokenUseCase {
    private authenticationRepository: AuthenticationRepository;

    constructor(_authenticationRepository: AuthenticationRepository){
        this.authenticationRepository = _authenticationRepository;
    }

    async invoke(code: string) {
        return this.authenticationRepository.getAuthenticationToken(code);
    }

}