import { Request, Response } from "express"
import { User } from "../models/User"


//retrieve users
export const getUsers = async (req: Request, res: Response) => {
    try {

        const users = await User.find(
            {
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    email: true,
                    isActive: true,
                }
            }
        );

        res.status(200).json(
            {
                susscess: true,
                message: "users retrieved successfully" ,
                data: users,
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                susscess: false,
                message: "users can't be retrieved" ,
                error: error
            }
        )
    }
}