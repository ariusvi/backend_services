import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Service } from "./Service"
import { User } from "./User";

@Entity('appointments')
export class Appointment extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number

    @Column ({name: 'appointment_date'})
    name!: Date

    @ManyToOne (() => Service, (service) => service.appointments)
    @JoinColumn ({name: "services_id"})
    service!: Service;

    @ManyToOne (() => User, (user) => user.appointments)
    @JoinColumn ({ name: "users_id"})
    user!: User;
}
