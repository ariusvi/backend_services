import { Request, Response } from "express";
import { Appointment } from "../models/Appointment";

// create new appointment
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

//  update appointment

export const updateAppointment = (req: Request, res: Response) => {
    try {
        // retrieve data
        const serviceId = req.body.service;
        const userId = req.tokenData.userId

        // validar la data
        if (!userId) {
            return res.status(400).json(
                {
                    success: false,
                    message: "user's id is needed"
                }
            )
        }

        // update data in database
        const appointmentUpadated = Appointment.update(
            {
                id: userId
            },
            {
                service: serviceId
            }
        )

        // response
        res.status(200).json(
            {
                success: true,
                message: "appointment updated",
                data: appointmentUpadated
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "user profile cant be updated",
            error: error
        })
    }
}

// retrieve appointment
export const getAppointmentsById = async (req: Request, res: Response) => {
    try {
    const appointmentId = req.body.id;

    const appointment = await Appointment.findOne( 
        {
            where:
            {
                id: parseInt(appointmentId)
            }
        }
    )
    if (!appointmentId) {
        return res.status(400).json({
            success: false,
            message: "this appointment doesn't exist"
        })
    }


    res.status(200).json(
        {
            success: true,
            message: "appointment retrieved succesfully",
            data: appointment

        }
    )

} catch (error) {
    res.status(500).json(
        {
            susscess: false,
            message: "appointment can't be retrieved" ,
            error: error
        }
    )
}
}


// retrieve user's appointment
export const getAppointments = async (req: Request, res: Response) => {
    try {
    const userId = req.tokenData.userId 

    const appointment = await Appointment.find( 
        {
            where:
            {
                user: 
                {
                    id: userId
                }
            }
        }
    );

    res.status(200).json(
        {
            success: true,
            message: "user's appointments: ",
            data: appointment 
        }
    )

}catch (error) {
    res.status(500).json(
        {
            susscess: false,
            message: "user's appointment can't be retrieved" ,
            error: error
        }
    )
}
};