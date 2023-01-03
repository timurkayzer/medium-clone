import { injectable } from 'inversify';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import dataSource from './datasource';

@injectable()
export class DbService {

    public dataSource: DataSource;

    constructor() {
        this.init();
    }

    private async init() {
        try {
            this.dataSource = await dataSource.initialize();
            console.log("Data Source has been initialized!");
        }
        catch (e) {
            console.error("Error during Data Source initialization:", e);
        }
    }
}