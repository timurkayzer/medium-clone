import { Column } from "typeorm/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { Entity } from "typeorm/decorator/entity/Entity";
import { IUser } from "./user.interface";

@Entity({
    name: 'users'
})
export class User implements IUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    login: string;

    @Column()
    name: string;

    @Column()
    passwordHash: string;
}