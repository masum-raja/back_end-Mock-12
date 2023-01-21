const {Router}=require("express");
const bcrypt = require("bcrypt");

const {signUpModel}=require("../Models/signUp.model")

const signup=Router();

signup.post("/",async(req,res)=>{
    const {name,email,password}=req.body
    const userPresent=await signUpModel.findOne({email})

    if(userPresent){
        res.status(400).send({message:"User already exist"})
        return
    }

    try{
        bcrypt.hash(password,5,async(err,hash)=>{
            const user=new signUpModel({name,email,password:hash})
            await user.save()
            res.status(200).send({message:"User created successfully"})
        })

    }catch(err){
        console.log(err);
        res.status(400).send({message:"Something went wrong! please try again"})
    }

})

module.exports={signup}