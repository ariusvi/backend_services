import express, {Application, Request, Response} from "express";
import 'dotenv/config'
import dotenv from "dotenv";
import { createRole, deleteRole, getRoles, updateRole } from "./controllers/roleControllers";
import { AppDataSource } from "./database/db";
import { register } from "./controllers/authController";

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

/*roles routes*/
app.get('/roles', getRoles)
app.post('/roles', createRole)
app.put('/roles/:id', updateRole)
app.delete('/roles/:id', deleteRole)

// auth routes
app.post('/api/auth/register', register)

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


