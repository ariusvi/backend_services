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
                success: true,
                message: "users retrieved successfully",
                data: users,
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "users can't be retrieved",
                error: error
            }
        )
    }
}

//retrieve user's profile
export const getUsersProfile = async (req: Request, res: Response) => {
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


    } catch (error: any) {
        res.status(500).json(
            {
                susscess: false,
                message: "your profile can't be retrieved",
                error: error.message
            }
        )
    }
}

//update user's profiel
export const updateUsersProfile = async (req: Request, res: Response) => {
    try {
        // retrieve data
        const firstName = req.body.first_name
        const lastName = req.body.last_name
        const email = req.body.email
        const userId = req.tokenData.userId

        // validar la data
        // if (!firstName) {
        //     return res.status(400).json(
        //         {
        //             success: false,
        //             message: "name is needed"
        //         }
        //     )
        // }

        if (firstName && typeof firstName !== 'string') {
            return res.status(400).json(
                {
                    success: false,
                    message: "Name must be a text"
                }
            )
        }

        if (lastName && typeof firstName !== 'string') {
            return res.status(400).json(
                {
                    success: false,
                    message: "Name must be a text"
                }
            )
        }
        

        // update data in database
        // const userUpadated = User.update(
        //     {
        //         id: userId
        //     },
        //     {
        //         firstName: firstName
        //     }
        // )

        const user = await User.findOne({
            where: {
                id: userId
            }
        }) 
        if (!user) {
            return res.status(401).json(
                {
                    success: false,
                    message: "User doesn't exist"
                }
            )
        }
        user.firstName = firstName
        user.lastName = lastName
        user.email = email
        const userUpadated = await user.save()

        // response
        res.status(200).json(
            {
                success: true,
                message: "user updated",
                data: userUpadated
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "user profile cant be updated",
            error: error
        })
    }
};

//delete user

export const deleteUser = async (req: Request, res: Response) => {
    try {
        // retrieve data
        const userId = req.body.id

        // validate data
        if (!userId) {
            return res.status(400).json(
                {
                    success: false,
                    message: "user id is needed"
                }
            )
        }

        // look for user
        const user = await User.findOne(
            {
                where: {
                    id: userId
                }
            }
        )

        if (!user) {
            return res.status(400).json(
                {
                    success: false,
                    message: "user doesn't exist"
                }
            )
        }

        // delete user
        const userDeleted = await User.delete(
            {
                id: userId
            }
        )

        // response
        res.status(200).json(
            {
                success: true,
                message: "user deleted",
                data: userDeleted
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "user can't be deleted",
                error: error
            }
        )
    }
}
