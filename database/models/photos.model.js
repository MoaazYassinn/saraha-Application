import mongoose from "mongoose"


const Schema=new mongoose.Schema({
    title:String,
    img:String,
    images:{
        type:String
    }
},{timestamps:true})

Schema.post('init',function(doc){
doc.img=process.env.BASE_URL+doc.img
})

export const photomodel=mongoose.model('photo',Schema)