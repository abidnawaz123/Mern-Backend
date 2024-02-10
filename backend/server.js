require("dotenv").config()
const express = require("express")
const app = express()

app.use(express.json())

const workoutRouters = require("./routers/workoutModel")
const cardRouters = require("./routers/cardModel")
const userRouters = require("./routers/user")
const cors = require("cors")
app.use(cors())
app.use("/api/workouts", workoutRouters)
app.use("/api/user", userRouters)
app.use("/api/card", cardRouters)

const mongoose = require("mongoose")

//connect to database 
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connected to the Database and server is running on port ', process.env.PORT || 4000)
        })
    })
    .catch((error) => {
        console.log(error)
    })