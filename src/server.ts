import express, {Application, Request, Response} from "express";
import 'dotenv/config'
import dotenv from "dotenv";
import { createRole, deleteRole, getRoles, updateRole } from "./controllers/roleControllers";
import { AppDataSource } from "./database/db";
import { login, register } from "./controllers/authController";
import { deleteUser, getUsers, getUsersProfile, updateUsersProfile } from "./controllers/userController";
import { getServices } from "./controllers/serviceController";
import { auth } from "./middlewares/auth";
import { isSuperAdmin } from "./middlewares/isSuperAdmin";
import { createAppointment, deleteAppointments, getAppointments, getAppointmentsById, updateAppointment } from "./controllers/appointmentController";
import  cors  from "cors";


dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

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
app.get('/api/users', auth, isSuperAdmin, getUsers)
app.delete('/api/users', auth, isSuperAdmin, deleteUser)
app.get('/api/users/profile', auth, getUsersProfile)
app.put('/api/users/profile', auth, updateUsersProfile)


// appointments routes
app.post('/api/appointments', auth, createAppointment) 
app.put('/api/appointments', auth, updateAppointment)
app.get('/api/appointments', auth, getAppointments)
app.get('/api/appointments/:id', getAppointmentsById)
app.delete('/api/appointments', auth, deleteAppointments)

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


