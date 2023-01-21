const {Router}=require("express");

const {signUpModel}=require("../Models/signUp.model");

const getProfile=Router();

getProfile.get("/",async(req,res)=>{
   const UserID=req.body.UserId
   console.log(UserID)
    try{
        const getData=await signUpModel.find({"_id":UserID})
        res.send(getData)

    }catch(err){
        console.log(err)
        res.status(400).send({message:"Something went wrong! please try again"})
    }
})

module.exports={getProfile}