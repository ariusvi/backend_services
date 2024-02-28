import { Request, Response } from "express"

export const getRoles = (req: Request, res: Response) => {
    res.status(200).json(
        {
            success: true,
            message: "Roles retrieved succcessfully"
        }
    )
}

export const createRole = (req: Request, res: Response) => {

    //retrieve information through the body
    const name = req.body.name
    console.log(name);

    res.status(201).json(
        {
            success: true,
            message: "Role created"
        }
    )
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