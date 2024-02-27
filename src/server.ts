import express from "express";
import dotenv from "dotenv";
import { AppDataSource } from "../database/db";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4001;

app.get("/healthy", (req, res) => {
    /*para ver si la api está viva*/
    res.status(200).json({
        success: true,
        message: "Server is healthy",
    });
});

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
