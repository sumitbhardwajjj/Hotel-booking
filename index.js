import express from 'express'
import dotenv from "dotenv"
import mongoose from 'mongoose'
import authRoute from './routes/auth.js'
import hotelsRoute from './routes/hotels.js'
import usersRoute from './routes/users.js'
import roomRoute from './routes/room.js'
import cors from 'cors'

const app = express()


dotenv.config()

const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongodb")
      } catch (error) {
        throw error
      }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("Mongodb Disconnected")
})

app.use(express.static('build'))
//middleware
app.use(cors())
app.use(express.json())
// app.use("/auth", authRoute)
app.use("/hotels", hotelsRoute)
app.use("/room", roomRoute)
app.use("/users", usersRoute)



app.listen(4000, ()=>{
    connect()
    console.log("connected to backend")
})