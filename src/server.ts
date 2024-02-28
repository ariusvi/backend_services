import express, {Application, Request, Response} from "express";
import dotenv from "dotenv";
import 'dotenv/config'
import { createRole, deleteRole, getRoles, updateRole } from "./controllers/roleControllers";
import { AppDataSource } from "./database/db";

dotenv.config();

const app: Application = express();

app.use(express.json());

const PORT = process.env.PORT || 4001;

app.get("/healthy", (req: Request, res: Response) => {
    /*para ver si la api está viva*/
    res.status(200).json({
        success: true,
        message: "Server is healthy",
    });
});

/*roles routes*/
app.get('/roles', getRoles)
app.post('/roles', createRole)
app.put('/roles', updateRole)
app.delete('/roles', deleteRole)

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected");
    })
    .catch((error) => {
        console.log(error);
    });

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
