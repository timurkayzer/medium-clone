import { Container, ContainerModule, interfaces } from 'inversify';
import { App } from './app';
import { IController } from './controller.interface';
import { CryptoService } from './crypto/crypto.service';
import { ICryptoService } from './crypto/crypto.service.interface';
import { DbService } from './db/db.service';
import { IDbService } from './db/db.service.interface';
import { DICT } from './dict';
import { JwtMiddleware } from './middlewares/jwt.middleware';
import { IMiddleware } from './middlewares/middleware.interface';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { IPostService } from './post/post.service.interface';


export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
    bind<IDbService>(DICT.DbService).to(DbService).inSingletonScope();
    bind<ICryptoService>(DICT.CryptoService).to(CryptoService);
    bind<IPostService>(DICT.PostService).to(PostService);
    bind<IController>(DICT.PostController).to(PostController);
    bind<IMiddleware>(DICT.JwtMiddleware).to(JwtMiddleware);
    bind(DICT.App).to(App).inSingletonScope();
});


async function bootstrap(): Promise<void> {
    const appContainer = new Container();
    appContainer.load(appBindings);
    const app = appContainer.get<App>(DICT.App);
    await app.init();
}

export const boot = bootstrap();
