const {Router}=require("express");


const {signupModel} = require("../Models/signup.model")

const getProfile=Router();

getProfile.get("/",async(req,res)=>{
   const UserID=req.body.UserId
    try{
        const getData=await signupModel.find({"_id":UserID})
        res.send(getData)

    }catch(err){
        console.log(err)
        res.status(400).send({message:"Something went wrong! please try again"})
    }
})

module.exports={getProfile}