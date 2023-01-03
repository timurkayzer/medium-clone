import { DataSource } from "typeorm";

export interface IDbService {
    dataSource: DataSource;
}