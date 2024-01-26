import { userModel } from "../../database/models/user.model.js"

import bcyrpt from "bcrypt"
import { AppError } from "../utlis/AppError.js"

export const checkEmail=async(req,res,next)=>{
    let user=await userModel.findOne({email:req.body.email})
    if(user) return next(new AppError("Already exist",409))


    req.body.password=bcyrpt.hashSync(req.body.password,8)
    next()
}