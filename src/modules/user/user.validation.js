

import joi from "joi"

 const signupSchemaVal=joi.object({
    name:joi.string().min(3).max(20).required(),
    email:joi.string().email().required(),
    password:joi.string().pattern(/^[A-Z][a-z0-9#@]{8,40}$/),
    rePassword:joi.valid(joi.ref('password')),
    age:joi.number().min(10).max(80).required()

})

const signinSchemaVal=joi.object({
    email:joi.string().email().required(),
    password:joi.string().pattern(/^[A-Z][a-z0-9#@]{8,40}$/),

})




export{
    signupSchemaVal,
    signinSchemaVal

}