import { Request, Response, Router } from "express";
import { IController } from "../controller.interface";

class UserController implements IController {
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

export const userController = new UserController();