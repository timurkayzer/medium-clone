import 'reflect-metadata';
import express, { Express, json } from 'express';
import { inject, injectable } from 'inversify';
import { DICT } from './dict';
import { IController } from './controller.interface';
import { IMiddleware } from './middlewares/middleware.interface';

@injectable()
export class App {

    private app: Express;

    constructor(@inject(DICT.PostController) private postController: IController,
        @inject(DICT.UserController) private userController: IController,
        @inject(DICT.JwtMiddleware) private jwtMiddleware: IMiddleware) {

    }

    public init() {
        this.app = express();
        this.app.use(json);
        this.app.use(this.jwtMiddleware.execute.bind(this.jwtMiddleware));
        this.app.use('user', this.userController.router);
        this.app.use('post', this.postController.router);
        this.app.listen(3000, '0.0.0.0', () => {
            console.log("App is listening");
        });
    }

}
