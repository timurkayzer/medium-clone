import 'reflect-metadata';
import { Request, Response, Router } from "express";
import { inject, injectable } from "inversify";
import { IController } from "../controller.interface";
import { DICT } from '../dict';
import { IPostService } from './post.service.interface';
import { InsertPostDto } from './insert-post.dto';
import { IPost } from './post.interface';
import { ValidateMiddleware } from '../middlewares/validate.middleware';
import { UpdatePostDto } from './update-post.dto';

@injectable()
export class PostController implements IController {
    public router = Router();

    constructor(@inject(DICT.PostService) private postService: IPostService) {
        this.initRoutes();
    }

    private initRoutes() {
        this.router.post('', ValidateMiddleware(InsertPostDto), this.createPost.bind(this));
        this.router.get('', this.getPosts.bind(this));
        this.router.delete(':id', this.deletePost.bind(this));
        this.router.patch('', ValidateMiddleware(UpdatePostDto), this.updatePost.bind(this));
    }


    async createPost(req: Request, res: Response) {
        const postDto: InsertPostDto = req.body;
        try {
            const post = await this.postService.insertPost(postDto);
            res.status(200);
            res.send(post);
        }
        catch (e) {
            res.status(500);
            res.send(e?.toString());
        }

    }

    async getPosts(req: Request, res: Response) {
        try {
            const posts = await this.postService.getPosts();
            res.status(200);
            res.send(posts);
        }
        catch (e) {
            res.status(500);
            res.send(e?.toString());
        }
    }

    async deletePost(req: Request, res: Response) {
        const postId: string = req.params['id'];
        try {
            const post = await this.postService.deletePost(Number(postId));
            res.status(200);
            res.send(post);
        }
        catch (e) {
            res.status(500);
            res.send(e?.toString());
        }
    }

    async updatePost(req: Request, res: Response) {
        const postDto: Partial<IPost> = req.body;
        try {
            const post = await this.postService.updatePost(postDto);
            res.status(200);
            res.send(post);
        }
        catch (e) {
            res.status(500);
            res.send(e?.toString());
        }
    }
}