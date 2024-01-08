import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({

    name:{
        type: String,
        required:true,
        unique:true
    },
    type:{
        type: String,
        required:true
    },
    city:{
        type: String,
        required:true
    },
    address:{
        type: String,
        required:true
    },
    thumbnail:{
        type: String,
        required:true,
        unique:true
    },
     
});


export default mongoose.model("Hotel",HotelSchema)