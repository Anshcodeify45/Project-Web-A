import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        max:20,
        min:5
    },
    username:{
        type:String,
        required:true,
        trim:true,
        max:20,
        min:5
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
    },
})

const user = mongoose.model('user',userSchema);

export default user;