import DBCONNECT from "./DB"
import Errorhandler from "./middleware/errorHandler"
import TODOROUTE from "./routes/todo"
import dotenv from "dotenv"
import express from "express"
import cors from 'cors'
dotenv.config()

// init APP
const APP = express()
APP.use(express.json())
APP.use(cors({credentials: true, origin:true}));

// Routes
APP.use("/todo", TODOROUTE)


// Error Handler
APP.use(Errorhandler)

DBCONNECT(() => {
    APP.listen(5000, () => {
        console.log("Server is running on port 5000")
    })
})
