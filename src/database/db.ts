import "reflect-metadata"
import { DataSource } from "typeorm"
export const AppDataSource = new DataSource({
type: "mysql",
host: process.env.HOST || "localhost",
port: Number(process.env.DB_PORT) || 3307,
username: process.env.DB_USER || "root",
password: process.env.DB_PASSWORD || "1234",
database: "old_ink",
entities: [],
synchronize: false,
logging: false,
})