import "reflect-metadata"
import 'dotenv/config';

import { DataSource } from "typeorm"
import { Roles1709145409685 } from "./migrations/1709145409685-roles"
import { Services1709196898071 } from "./migrations/1709196898071-services";
import { Users1709219435610 } from "./migrations/1709211299836-users";
import { Appointments1709211299836 } from "./migrations/1709219435610-appointments";
import { Role } from "../models/Role";
import { User } from "../models/User";
import { Service } from "../models/Service";
import { Appointment } from "../models/Appointment";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3307,
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "1234",
    database: process.env.DB_DATABASE || "old_ink",
    entities: [
        Role,
        User,
        Service,
        Appointment
    ],
    migrations: [
        Roles1709145409685,
        Services1709196898071,
        Users1709219435610,
        Appointments1709211299836
    ],
    synchronize: false,
    logging: false,
})