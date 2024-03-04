import { Request, Response } from "express";
import { Service } from "../models/Service";

//retrieve services
export const getServices = async (req: Request, res: Response) => {
    try {

        const services = await Service.find();

        res.status(200).json(
            {
                susscess: true,
                message: "services retrieved successfully" ,
                data: services,
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                susscess: false,
                message: "services can't be retrieved" ,
                error: error
            }
        )
    }
}