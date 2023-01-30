import 'reflect-metadata';
import { injectable } from "inversify";
import { ICryptoService } from "./crypto.service.interface";
import { decode, sign, verify } from 'jsonwebtoken';

@injectable()
export class CryptoService implements ICryptoService {
    hashString(str: string): string {
        throw new Error("Method not implemented.");
    }
    createJwtToken(data: string): string {
        throw new Error("Method not implemented.");
    }

}