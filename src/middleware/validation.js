import { AppError } from "../utlis/AppError.js"

export const validation=(schema)=>{

    return(req,res,next)=>{
        const {error}=schema.validate({...req.params,...req.body,...req.query},{abortEarly:false})
        
        if(!error){
                next()
        }else{

            let errmsg=[]
            error.details.forEach((val) => {
                errmsg.push(val.message)
                
            });
            next(new AppError(errmsg,401))
           
        }
    }
   

   
}
