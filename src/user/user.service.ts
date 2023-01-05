import 'reflect-metadata';
import { inject, injectable } from "inversify";
import { IUserService } from "./user.service.interface";
import { DICT } from '../dict';
import { IDbService } from '../db/db.service.interface';
import { UserEntity } from './user.entity';
import { IUser } from './user.interface';
import { LoginDto } from './login.dto';
import { RegisterDto } from './register.dto';
import { IAuthUser } from './auth-user.interface';

@injectable()
export class UserService implements IUserService {

    private userModel;

    constructor(@inject(DICT.DbService) private dbService: IDbService) {
        this.userModel = this.dbService.dataSource.getRepository(UserEntity);
    }

    getUserInfo: (email: string) => Promise<IUser | null>;

    insertUser(registerDto: RegisterDto): IUser {
        throw new Error('Method not implemented.');
    }

    authUser(loginDto: LoginDto): IAuthUser {
        throw new Error('Method not implemented.');
    }


}