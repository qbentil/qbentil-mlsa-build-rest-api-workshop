import DBCONNECT from "./DB"
import Errorhandler from "./middleware/errorHandler"
import TODOROUTE from "./routes/todo"
import dotenv from "dotenv"
import express from "express"

dotenv.config()

// init APP
const APP = express()
APP.use(express.json())

// Routes
APP.use("/todo", TODOROUTE)


// Error Handler
APP.use(Errorhandler)

DBCONNECT(() => {
    APP.listen(5000, () => {
        console.log("Server is running on port 5000")
    })
})
