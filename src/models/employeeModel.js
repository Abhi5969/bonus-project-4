const mongoose= require("mongoose")
const validator=require('validator')
const empolyeeSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        minLength:[2,"name should be two letter"],
        maxLength:[20,"name should be within 20 letter"]
    },
    email:{
        type:String,
        trim:true,
        required:true,
        validator:validator.isEmail()
    },
    password:{
        type:String,
        trim:true,
        required:true
    },
    role:{
        type:String,
        enum:["Admin","Super Admin","Employee"],
        default:"Employee"
    }
},{timestamps:true,validateBeforeSave:true})

module.exports=mongoose.model('Employee',empolyeeSchema)