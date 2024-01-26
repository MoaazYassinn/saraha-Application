import mongoose from 'mongoose'



export function dbConnection(){
 mongoose.connect('mongodb://0.0.0.0:27017/sara7aApp').then(()=>{
        console.log('connected successfully');
      }).catch(err=>{
          console.log('err',err);
      })
}
