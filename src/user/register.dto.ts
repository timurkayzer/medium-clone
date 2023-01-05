import { IsString } from "class-validator";

export class RegisterDto {
    @IsString()
    login: string;
    @IsString()
    name: string;
    @IsString()
    password: string;
}