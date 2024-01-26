
import { userModel } from "../../../database/models/user.model.js"
import bcyrpt from "bcrypt"
import Jwt from "jsonwebtoken"
import { catchError } from "../../middleware/catchError.js"
import { AppError } from "../../utlis/AppError.js"






const signup=catchError(async(req,res)=>{

     await userModel.insertMany(req.body)
     let token=Jwt.sign({email:req.body.email},process.env.JWT_KEY)
         // sendEmails(req.body.email)
      res.json({message:"success"})
    

   
})

const verify=catchError(async(req,res,next)=>{
    Jwt.verify(req.params.token, process.env.JWT_KEY,async (err,decoded)=>{
        if(err) return next(new AppError(err,401))

        await userModel.findOneAndUpdate({email:decoded.email},{verifyEmail:true})
        res.json({message:"success"})

    })
    
})

const signin=catchError(async(req,res,next)=>{
    let user=await userModel.findOne({email:req.body.email})
    if(user &&bcyrpt.compareSync(req.body.password,user.password)){
        let token =Jwt.sign({userId:user._id,email:user.email},process.env.JWT_KEY)
        return res.json({message:"success",token})
    }
    else{

        // res.json({message:"incorrect email or password"})
        next(new AppError("incorrect email or password",401))
    }
})



export{
    signup,
    verify,
    signin
}