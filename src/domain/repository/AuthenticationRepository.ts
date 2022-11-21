import { Authentication } from "../model/Authentication";

export default interface AuthenticationRepository {
    getAuthenticationToken(code: string): Promise<Authentication>;
    refreshToken(): string;
}