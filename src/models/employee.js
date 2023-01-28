const mongoose= require("mongoose")

const empolyeeSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        minLength:[2,"name should be two letter"],
        maxLength:[20,"name should be within 20 letter"]
    }
})