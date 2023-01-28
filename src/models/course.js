const mongoose= require("mongoose")

const courseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true
    },
    videoUrl:{
        type:String,

    },
    topics:[{type:String,}],
    duration:{type:String,},
    category:{type:String}
},{timestamps:true,validateBeforeSave:true})

module.exports=mongoose.model('Course',courseSchema)