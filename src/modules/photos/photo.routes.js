import express from "express"
import { addPhoto, getPhoto } from "./photos.controller.js"
import { fileUpload } from "../../FileUpload/Upload.js"


const photoRouter=express.Router()


photoRouter.post('/photos',fileUpload('img'),addPhoto)
photoRouter.get('/photos',getPhoto)


export default photoRouter

