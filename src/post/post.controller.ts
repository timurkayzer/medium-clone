import 'reflect-metadata';
import { Request, Response, Router } from "express";
import { inject, injectable } from "inversify";
import { IController } from "../controller.interface";
import { DICT } from '../dict';
import { IPostService } from './post.service.interface';

@injectable()
export class PostController implements IController {
    public router = Router();

    constructor(@inject(DICT.PostService) private postService: IPostService) {
        this.initRoutes();
    }

    private initRoutes() {
        this.router.post('', this.createPost.bind(this));
        this.router.get('', this.getPosts.bind(this));
        this.router.delete('', this.deletePost.bind(this));
        this.router.patch('', this.updatePost.bind(this));
    }


    async createPost(req: Request, res: Response) {

    }

    async getPosts(req: Request, res: Response) {

    }

    async deletePost(req: Request, res: Response) {

    }

    async updatePost(req: Request, res: Response) {

    }
}