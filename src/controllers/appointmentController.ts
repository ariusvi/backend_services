import { Request, Response } from "express";
import { Appointment } from "../models/Appointment";


export const createAppointment = async (req: Request, res: Response) => {
    try {
        //retrieve information through the body
        const dateAppointment = req.body.dateAppointment;
        const serviceId = req.body.service;
        const userId = req.body.user;

        const newAppointment = await Appointment.create(
            {
                user: userId,
                service: serviceId,
                dateAppointment: dateAppointment,
                
            }
        ).save()

        res.status(201).json(
            {
                success: true,
                message: "New appointment created",
                data: newAppointment
            }
        )

    } catch (error:any) {
        res.status(500).json(
            {
                susscess: false,
                message: "appointment can't be created",
                error: error.message
            }
        )
    }
}