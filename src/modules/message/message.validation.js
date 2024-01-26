import joi from "joi"

 const AddmsgSchemaVal=joi.object({
    message:joi.string().min(2).max(200).required(),
    recievedId:joi.string().hex().length(24)

})

const getmsgSchemaVal=joi.object({
    Id:joi.string().hex().length(24)
})


export{
    AddmsgSchemaVal,
    getmsgSchemaVal
}