export interface ICryptoService {
    hashString(str: string): string;

    createJwtToken(data: string): string;
}