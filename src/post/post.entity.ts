import { Column } from "typeorm/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { Entity } from "typeorm/decorator/entity/Entity";
import dataSource from "../db/datasource";
import { IPost } from "./post.interface";

@Entity({
    name: 'posts'
})
export class Post implements IPost {

    constructor(title: string, text: string) {
        this.title = title;
        this.text = text;
        this.createdAt = new Date();
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    text: string;

    @Column()
    readTime: number;

    @Column()
    createdAt: Date;
}