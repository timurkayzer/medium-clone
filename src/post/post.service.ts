import 'reflect-metadata';
import { injectable } from "inversify";
import { inject } from 'inversify';
import { DICT } from '../dict';
import { IDbService } from '../db/db.service.interface';
import { Post } from './post.entity';
import { InsertPostDto } from './insert-post.dto';
import { IPost } from './post.interface';
import { IPostService } from './post.service.interface';
import { READ_SYMBOLS_PER_MINUTE } from './constants';


@injectable()
export class PostService implements IPostService {
    private postModel;
    constructor(
        @inject(DICT.DbService) private dbService: IDbService
    ) {
        this.postModel = this.dbService.dataSource.getRepository(Post);
    }

    async deletePost(id: number): Promise<IPost> {
        const post = await this.postModel.findOneBy({ id });
        if (post) {
            return this.postModel.remove(post);
        }
        else {
            throw new Error("Post not found");
        }
    }

    async updatePost(post: Partial<IPost>): Promise<IPost> {
        const updated = await this.postModel.update({ id: post.id }, post);
        if (updated) {
            return post as IPost;
        }
        else {
            throw new Error("Post not found");
        }
    }

    getPosts(): Promise<IPost[]> {
        return this.postModel.find();
    }

    async insertPost(postDto: InsertPostDto): Promise<IPost> {
        let post = new Post(postDto.title, postDto.text);
        post.readTime = this.calculateReadTimeMs(postDto.text);

        post = this.postModel.create(post);

        return this.postModel.save(post);
    }

    calculateReadTimeMs(text: string): number {
        return (text.length / READ_SYMBOLS_PER_MINUTE) * 60 * 1000;
    }


}