import express from "express"
import { checkEmail } from "../../middleware/checkEmail.js"
import { signin, signup, verify } from "./user.controller.js"
import { validation } from "../../middleware/validation.js"
import { signinSchemaVal, signupSchemaVal } from "./user.validation.js"


const userRouter=express.Router()




userRouter.post('/signup',validation(signupSchemaVal),checkEmail,signup)
userRouter.get('/verify/:token',verify)
userRouter.post('/signin',validation(signinSchemaVal),signin)












export default userRouter