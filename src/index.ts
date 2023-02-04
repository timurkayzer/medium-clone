import { Container, ContainerModule, interfaces } from 'inversify';
import { App } from './app';
import { IController } from './controller.interface';
import { CryptoService } from './crypto/crypto.service';
import { ICryptoService } from './crypto/crypto.service.interface';
import { DbService } from './db/db.service';
import { IDbService } from './db/db.service.interface';
import { DICT } from './dict';
import { AuthMiddleware } from './middlewares/auth.middleware';
import { JwtMiddleware } from './middlewares/jwt.middleware';
import { IMiddleware } from './middlewares/middleware.interface';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { IPostService } from './post/post.service.interface';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { IUserService } from './user/user.service.interface';


export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
    bind<IDbService>(DICT.DbService).to(DbService);
    bind<ICryptoService>(DICT.CryptoService).to(CryptoService);
    bind<IPostService>(DICT.PostService).to(PostService);
    bind<IUserService>(DICT.UserService).to(UserService);
    bind<IController>(DICT.PostController).to(PostController);
    bind<IController>(DICT.UserController).to(UserController);
    bind<IMiddleware>(DICT.JwtMiddleware).to(JwtMiddleware);
    bind<IMiddleware>(DICT.AuthMiddleware).to(AuthMiddleware);
    bind(DICT.App).to(App).inSingletonScope();
});


async function bootstrap(): Promise<void> {
    const appContainer = new Container();
    appContainer.load(appBindings);
    const app = appContainer.get<App>(DICT.App);
    await app.init();
}

export const boot = bootstrap();
