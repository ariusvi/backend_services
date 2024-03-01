import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Role } from "./Role"
import { Appointment } from "./Appointment"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id!: number

    @Column ({name: 'name'})
    name!: string

    @Column ({name: 'last_name'})
    lastName!: string

    @Column ({name: 'email'})
    email!: string

    @Column ({name: 'password_hash'})
    passwordHash!: string

    @Column ({name: 'is_active'})
    isActive!: boolean

    @ManyToOne (() => Role, (role) => role.users)
    @JoinColumn ({ name: "roles _id"})
    role!: Role;

    @OneToMany (() => Appointment, (appointment) => appointment.user)
    appointments!: User[];
}
