import { Container, ContainerModule, interfaces } from 'inversify';
import { App } from './app';
import { DbService } from './db/db.service';
import { IDbService } from './db/db.service.interface';
import { DICT } from './dict';


export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
    bind<IDbService>(DICT.DbService).to(DbService).inSingletonScope();
    bind(DICT.App).to(App).inSingletonScope();
});


async function bootstrap(): Promise<void> {
    const appContainer = new Container();
    appContainer.load(appBindings);
    const app = appContainer.get<App>(DICT.App);
    await app.init();
}

export const boot = bootstrap();
