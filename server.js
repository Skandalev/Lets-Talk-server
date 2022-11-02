const express = require('express')
const  mongoose  = require("mongoose")
const dotenv = require('dotenv')
const { chats } = require('./data')
const userRoutes = require('./routes/userRoutes')
const chatRoutes = require('./routes/chatRoutes')
const app = express()
const colors = require('colors')
const { notFound, errorHandler } = require('./midellware/errorMiddelware')
dotenv.config()
app.use(express.json())

mongoose.connect(process.env.DB,{useNewUrlParser:true})
        .then(()=>console.log('conected to DB'.red.bold))
        .catch((err)=>console.log(err))

app.use("/api/user",userRoutes)
app.use("/api/chat",chatRoutes)

app.use(notFound)
app.use(errorHandler)
const PORT = process.env.PORT || 5000
app.listen(PORT,console.log("server running on "+PORT.yellow.bold))