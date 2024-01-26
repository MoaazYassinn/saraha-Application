
process.on('uncaughtException',(err)=>{
    console.log('error',err);
})


import dotenv from "dotenv"
import express from 'express'
import { dbConnection } from './database/dbConnection.js'
import userRouter from './src/modules/user/user.routes.js'
import messageRouter from './src/modules/message/message.routes.js'
import { AppError } from './src/utlis/AppError.js'
import { globalError } from './src/middleware/globalError.js'
import photoRouter from "./src/modules/photos/photo.routes.js";



const app = express()
const port = 3000
dotenv.config()

app.use('/',express.static('uploads'))
app.use(express.json())






app.use(userRouter)
app.use(messageRouter)
app.use(photoRouter)
dbConnection()






app.use('*',(req,res,next)=>{
  
    next( new AppError(`not found endpoint : ${req.originalUrl}`,404))

})



process.on('unhandledRejection',(err)=>{
    console.log('error',err);
})

app.use(globalError)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))