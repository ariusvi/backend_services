import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../models/User";

export const register = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
    // receive information
        const first_name = req.body.first_name;
        const last_name = req.body.last_name;
        const email = req.body.email;
        const password = req.body.password;
    
    // validation password
    if (password.length < 6 || password.length > 12) {
        return res.status(400).json(
            {
                success: false,
                message: "your password must be between 6 and 12 characters"
            }
        )
    }

    // validation email
    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;
    if(!validEmail.test(email) ){ //meth type test
		
		return res.status(400).json(
            {
                success: false,
                message: "email format invalid"
            }
        )
    }

    // process data if necessary
    const passwordEncryted = bcrypt.hashSync (password, 8);
    // check that the password is encrypted
    console.log(passwordEncryted);
    
    const newUser = await User.create(
        {
            firstName: first_name,
            lastName: last_name,
            email: email,
            passwordHash: passwordEncryted,
            role: {
                id:1
            }
        }
    ).save()

        res.status(201).json(
            {
                success: true,
                message: "user registered successfully",
                data: newUser
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                susscess: false,
                message: "user can't be regstered"  ,
                error: error
            }
        )
    }
}