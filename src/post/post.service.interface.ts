import { InsertPostDto } from "./insert-post.dto";
import { IPost } from "./post.interface";

export interface IPostService {
    getPosts(): Promise<IPost[]>;

    insertPost(post: InsertPostDto): Promise<IPost>;

    deletePost(id: number): Promise<IPost>;

    updatePost(post: Partial<IPost>): Promise<IPost>;

    calculateReadTimeMs(text: string): number;
}