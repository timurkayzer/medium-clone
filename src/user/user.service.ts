import 'reflect-metadata';
import { inject, injectable } from "inversify";
import { IUserService } from "./user.service.interface";
import { DICT } from '../dict';
import { IDbService } from '../db/db.service.interface';
import { User } from './user.entity';
import { IUser } from './user.interface';
import { LoginDto } from './login.dto';
import { RegisterDto } from './register.dto';
import { IAuthUser } from './auth-user.interface';

@injectable()
export class UserService implements IUserService {

    private userModel;

    constructor(@inject(DICT.DbService) private dbService: IDbService) {
        this.userModel = this.dbService.dataSource.getRepository(User);
    }

    async getUserInfo(email: string): Promise<IUser | null> {
        const user = await this.userModel.findOneBy({ login: email });
        return user;
    }

    insertUser(registerDto: RegisterDto): Promise<IUser> {
        let user = new User();
        user.login = registerDto.login;
        user.name = registerDto.name;
        user.passwordHash = registerDto.password;

        user = this.userModel.create(user);
        return this.userModel.save(user);
    }

    authUser(loginDto: LoginDto): Promise<IAuthUser> {
        throw new Error('Method not implemented.');
    }


}