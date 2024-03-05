import { NextFunction, Request, Response } from "express"
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

//retrieve user's profile
export const getUsersProfile = async (req:Request, res:Response, next: NextFunction) => {
    try {
        const userId = req.tokenData.userId
        const user = await User.findOne(
            { 
                where: {
                    id: userId
                } 
            }
            )
            console.log(userId);

        if (!user) {
            return res.status(401).json(
                {
                    success: false,
                    message: "Your profile doesn't exist",
                }
            )
        }

        

        return res.status(201).json(
            {
                success: true,
                message: "Your profile is retrieved successfully",
                data: user
            }
        )
        next();

    } catch (error:any) {
            res.status(500).json(
                {
                    susscess: false,
                    message: "your profile can't be retrieved" ,
                    error: error.message
                }
            )
        }
}