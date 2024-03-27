import { Request, Response } from "express";
import { Appointment } from "../models/Appointment";
import { User } from "../models/User";

// create new appointment
export const createAppointment = async (req: Request, res: Response) => {
    try {
        //retrieve information through the body
        const dateAppointment = req.body.dateAppointment;
        const serviceId = req.body.serviceId;
        const userId = req.tokenData.userId;
        const user = await User.findOne(
            {
                where: {
                    id: userId
                }
            }
        )
        console.log(userId);

        if(!user) {
            return res.status(400).json(
            {
                success: false,
                message: "you need log to create an appointment",
            })
        }

        const newAppointment = await Appointment.create(
            {
                user: user,
                service: serviceId,
                dateAppointment: dateAppointment,
            
        }).save()

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

export const updateAppointment = async (req: Request, res: Response) => {
    try {
        //retrieve information through the body
        const dateAppointment = req.body.dateAppointment;
        const serviceId = req.body.serviceId;
        const userId = req.tokenData.userId;
        const user = await User.findOne(
            {
                where: {
                    id: userId
                }
            }
        )
        console.log(userId);

        if(!user) {
            return res.status(400).json(
            {
                success: false,
                message: "need log to update appointment",
            })
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

// retrieve appointment by id
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
            success: false,
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
            },
            relations: ["service"]
        }
        
    );
    console.log(appointment); // Muestra la información del servicio
    
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