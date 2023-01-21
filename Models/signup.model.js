const mongoose=require("mongoose")

const signUpSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const signupModel=mongoose.model("auth",signUpSchema)

module.exports={signupModel}