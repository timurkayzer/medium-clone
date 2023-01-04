import { Container, ContainerModule, interfaces } from 'inversify';
import { App } from './app';
import { CryptoService } from './crypto/crypto.service';
import { ICryptoService } from './crypto/crypto.service.interface';
import { DbService } from './db/db.service';
import { IDbService } from './db/db.service.interface';
import { DICT } from './dict';
import { PostService } from './post/post.service';
import { IPostService } from './post/post.service.interface';


export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
    bind<IDbService>(DICT.DbService).to(DbService).inSingletonScope();
    bind<ICryptoService>(DICT.CryptoService).to(CryptoService);
    bind<IPostService>(DICT.PostService).to(PostService);
    bind(DICT.App).to(App).inSingletonScope();
});


async function bootstrap(): Promise<void> {
    const appContainer = new Container();
    appContainer.load(appBindings);
    const app = appContainer.get<App>(DICT.App);
    await app.init();
}

export const boot = bootstrap();
