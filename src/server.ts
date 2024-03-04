import express, {Application, Request, Response} from "express";
import 'dotenv/config'
import dotenv from "dotenv";
import { createRole, deleteRole, getRoles, updateRole } from "./controllers/roleControllers";
import { AppDataSource } from "./database/db";
import { login, register } from "./controllers/authController";
import { getUsers } from "./controllers/userController";
import { getServices } from "./controllers/serviceController";

dotenv.config();

const app: Application = express();

app.use(express.json());

const PORT = process.env.PORT || 4001;

app.get("/healthy", (req: Request, res: Response) => {
    //to check if the API is active
    res.status(200).json({
        success: true,
        message: "Server is healthy",
    });
});

//roles routes
app.get('/roles', getRoles)
app.post('/roles', createRole)
app.put('/roles', updateRole)
app.delete('/roles', deleteRole)

// auth routes
app.post('/api/auth/register', register)
app.post('/api/auth/login', login)

// users routes
app.get('/api/users', getUsers)

// services routes
app.get('/api/services', getServices )

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected");
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });


