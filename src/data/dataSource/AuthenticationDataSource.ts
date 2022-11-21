import { Authentication } from "../../domain/model/Authentication";

export default interface AuthenticationDataSource {
    getAuthenticationToken(code: string): void;
}