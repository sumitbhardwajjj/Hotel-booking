import express from 'express'
import dotenv from "dotenv"
import mongoose from 'mongoose'
import hotelsRoute from './routes/hotels.js'
import cors from 'cors'

const app = express()
dotenv.config()

app.get('/',(req,res)=>{
  res.json("hello world")
})

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


//middleware
app.use(cors())
app.use(express.json())

app.use("/hotels", hotelsRoute)



const Port = 5001

app.listen(Port, ()=>{
    connect()
    console.log("connected to backend")
})