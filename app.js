const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const userRouter = require('./routes/userRoutes')

const app = express()
const PORT = process.env.PORT ||8001
const DB_URI = 'mongodb://127.0.0.1:27017/todo-app'


app.use(bodyParser.json())

//MongoDB Connection

mongoose.connect(DB_URI).then(()=>{
    console.log('Database connected successfully')
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`)
    })
})
.catch((error)=>console.log(error))

