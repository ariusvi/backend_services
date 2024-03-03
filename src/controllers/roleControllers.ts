import { Request, Response } from "express"
import { Role } from "../models/Role"

export const getRoles = (req: Request, res: Response) => {
    res.status(200).json(
        {
            success: true,
            message: "Roles retrieved succcessfully"
        }
    )
}

export const createRole = async (req: Request, res: Response) => {

    try {
        //retrieve information through the body
        const name = req.body.name
        console.log(name);

        const newRole = await Role.create(
            {
                name: name
            }
        ).save()

        res.status(201).json(
            {
                success: true,
                message: "Role created",
                data: newRole
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                susscess: false,
                message: "role can't be created",
                error: error
            }
        )
    }

}

export const updateRole = (req: Request, res: Response) => {

    //retrieve parameters from route
    console.log(req.params.id);

    res.status(200).json(
        {
            success: true,
            message: "Role updated"
        }
    )
}

export const deleteRole = (req: Request, res: Response) => {
    res.status(200).json(
        {
            success: true,
            message: "Role deleted"
        }
    )
}