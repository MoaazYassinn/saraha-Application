import { photomodel } from "../../../database/models/photos.model.js"





const addPhoto=(async(req,res)=>{
    req.body.img=req.files.img[0].filename
    let images=req.files.images.map((val)=>val.filename)
    req.body.images=images
   await photomodel.insertMany(req.body)
   res.json({message:"success"})
})

const getPhoto=(async(req,res)=>{
  let photos= await photomodel.find()
  res.json({message:"Success",photos})
})

export{
    addPhoto,
    getPhoto

}



