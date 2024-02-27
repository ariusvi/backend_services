import express, {Request, Response} from "express";
import dotenv from "dotenv";

dotenv.config();
import { AppDataSource } from "./database/db";
import { createRole, getRoles, updateRole } from "./controllers/roleControllers";



const app = express();

const PORT = process.env.PORT || 4001;

app.get("/healthy", (req, res) => {
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
