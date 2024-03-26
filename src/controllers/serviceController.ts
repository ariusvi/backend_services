import { Request, Response } from "express";
import { Service } from "../models/Service";

//retrieve services
export const getServices = async (req: Request, res: Response) => {
    try {
        
        const services = await Service.find();
        console.log(services);

        res.status(200).json(
            {
                success: true,
                message: "services retrieved successfully",
                data: services,
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "services can't be retrieved",
                error: error
            }
        )
    }
}