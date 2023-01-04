import 'reflect-metadata';
import { inject, injectable } from "inversify";
import { IUserService } from "./user.service.interface";
import { DICT } from '../dict';
import { IDbService } from '../db/db.service.interface';
import { UserEntity } from './user.entity';

@injectable()
export class UserService implements IUserService {

    private userModel;

    constructor(@inject(DICT.DbService) private dbService: IDbService) {
        this.userModel = this.dbService.dataSource.getRepository(UserEntity);
    }


}