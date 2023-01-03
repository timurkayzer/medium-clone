import 'reflect-metadata';
import express, { Express } from 'express';
import { injectable } from 'inversify';
import { userController } from './user/user.controller';

@injectable()
export class App {

    private app: Express;

    public init() {
        this.app = express();
        this.app.use('user', userController.router);
        this.app.listen(3000, '0.0.0.0', () => {
            console.log("App is listening");
        });
    }

}
