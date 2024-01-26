import mongoose from "mongoose"


const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    age:{
        type:Number,
        min:[10,'too short age'],
        max:[80,'too long age']
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:'user'
    },
    verifyEmail:{
        type:Boolean,
        default:false
    },
    
    IsActive:{
        type:Boolean,
        default:true
    }
},{timestamps:true})


export const userModel=mongoose.model('user',userSchema)