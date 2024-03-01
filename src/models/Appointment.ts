import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm"
import { Service } from "./Service"
import { User } from "./User";

@Entity('appointments')
export class Appointment {

    @PrimaryGeneratedColumn()
    id!: number

    @Column ({name: 'appointment_date'})
    name!: Timestamp

    @ManyToOne (() => Service, (service) => service.appointments)
    @JoinColumn ({name: "services_id"})
    service!: Service;

    @ManyToOne (() => User, (user) => user.appointments)
    @JoinColumn ({ name: "users_id"})
    user!: User;
}
