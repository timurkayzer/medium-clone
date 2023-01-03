import { Request, Response, Router } from "express";
import { IController } from "../controller.interface";

export class PostController implements IController {
    public router = Router();

    constructor() {
        this.initRoutes();
    }

    private initRoutes() {
        this.router.post('login', this.login.bind(this));
        this.router.post('register', this.register.bind(this));
    }

    async login(req: Request, res: Response) {

    }

    async register(req: Request, res: Response) {

    }
}