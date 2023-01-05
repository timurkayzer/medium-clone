import { LoginDto } from "./login.dto";
import { RegisterDto } from "./register.dto";
import { IUser } from "./user.interface";

interface IAuthUser extends Omit<IUser, 'passwordHash'> {
    jwtToken: string;
}

export interface IUserService {
    insertUser(registerDto: RegisterDto): IUser;

    authUser(loginDto: LoginDto): IAuthUser;

    getUserInfo: (email: string) => Promise<IUser | null>;
}