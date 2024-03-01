import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Appointment } from "./Appointment"

@Entity('sevices')
export class Service {
    @PrimaryGeneratedColumn ()
    id!: number

    @Column ({name: 'name'})
    name!: string

    @OneToMany(() => Appointment, (appointment) => appointment.service)
    appointments!: Service[]

}
