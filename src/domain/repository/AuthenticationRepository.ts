import { Authentication } from "../model/Authentication";

export default interface AuthenticationRepository {
    getAuthenticationToken(code: string): void;
    refreshToken(): void;
}