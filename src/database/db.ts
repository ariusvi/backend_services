import "reflect-metadata"
import 'dotenv/config';

import { DataSource } from "typeorm"
import { Roles1709145409685 } from "./migrations/1709145409685-roles"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3307,
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "1234",
    database: process.env.DB_DATABASE || "old_ink",
    entities: [],
    migrations: [Roles1709145409685],
    synchronize: false,
    logging: false,
})