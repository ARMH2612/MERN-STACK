require('dotenv').config()
const express = require('express')
const workoutRouts = require('./routes/workouts')
const mongoose = require('mongoose')


// express app
const app = express()

// middleware : 
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next()
})

// routes
app.use('/api/workouts',workoutRouts)

// DDB Connectio :
mongoose.connect(process.env.MONGO_URI)
    .then((ans) => {
        app.listen(process.env.PORT, ()=>{
            console.log("Connected to DB and Listening on port",process.env.PORT);
        })
    })
    .catch((err) => {
        console.log("Error in the Connection")
    })

