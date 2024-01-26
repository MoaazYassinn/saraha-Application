import express from "express"
import { AddMsg, allmsg, shareProfile } from "./message.controller.js"
import { auth } from "../../middleware/auth.js"
import { AddmsgSchemaVal,getmsgSchemaVal } from "./message.validation.js"
import { validation } from "../../middleware/validation.js"



const messageRouter=express.Router()

messageRouter.post('/messages',validation(AddmsgSchemaVal),AddMsg)
messageRouter.get('/messages/:Id',validation(getmsgSchemaVal),auth,allmsg)
messageRouter.get('/shareProfile',shareProfile)














export default messageRouter