
import multer from "multer";
import { v4 as uuidv4 } from 'uuid'; 

export const fileUploadAll=()=>{
  function fileFilter (req, file, cb) {
 
    if(file.mimetype.startsWith('image')){
        cb(null, true)
    }else{

        cb(new AppError('images only',401), false)
    }
  
  }

const storage = multer.diskStorage({
    destination: (req, file, cb)=> {
      cb(null, 'uploads/')
    },
    filename:  (req, file, cb)=> {
      cb(null,uuidv4()+"-"+ file.originalname)
    }
  })
  
  const upload = multer({ storage })
  return upload

}
export const fileUpload=(filedname)=> fileUploadAll().single(filedname)



export const UploadArrFiles=(filedname)=>fileUploadAll().fields(filedname)

