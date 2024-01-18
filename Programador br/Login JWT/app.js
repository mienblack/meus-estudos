require('dotenv').config()
const express = require('express')
const app = express()
const userRouter = require('./routes/userRouter')
const adminRouter = require('./routes/adminRouter')
const mongoose = require('mongoose')

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL,
    (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Mongo Connected")
        }
    })

app.use('/user', express.json(), userRouter)

app.use('/admin', express.json(), adminRouter)

app.listen(process.env.PORT, () => {
    console.log("Listening")
})