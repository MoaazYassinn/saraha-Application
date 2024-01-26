
import Jwt from "jsonwebtoken"
import { AppError } from "../utlis/AppError.js"

export const auth=async(req,res,next)=>{
    Jwt.verify(req.header('token'),'myNameIsMoaaz',(err,decoded)=>{

        if(err) return next(new AppError(err,401))
        
        req.user=decoded
        next()
    })
}