import { messageModel } from "../../../database/models/message.model.js";
import { catchError } from "../../middleware/catchError.js";
import QRCode from "qrcode";

const AddMsg=catchError(async(req,res)=>{

    await messageModel.insertMany(req.body)
    res.json({message:"success"})

})

const allmsg=catchError(async(req,res)=>{
    let messages=await messageModel.find({recievedId:req.params.Id})
    res.json({message:"success",messages})
})

const shareProfile=catchError(async(req,res)=>{
    QRCode.toDataURL("http:://localhost:3000/messages",(err,qr)=>{

        res.send(`<img src="${qr}"/>`)
    })
})


   
export{
    AddMsg,
    allmsg,
    shareProfile
}
