import { Column } from "typeorm/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { Entity } from "typeorm/decorator/entity/Entity";
import dataSource from "../db/datasource";

@Entity({
    name: 'users'
})
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    login: string;

    @Column()
    passwordHash: string;


}

export const userModel = dataSource.getRepository(UserEntity);