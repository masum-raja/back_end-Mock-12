const {Router}=require("express");

const {CalculateModel}=require("../Models/calculate.model");

const calculate=Router();

/*****************  GET METHOD  **************************/

calculate.get("/",async(req,res)=>{
    try{
      const data=await CalculateModel.find();
      res.status(200).send(data)
    }catch(err){
        console.log(err)
        res.status(400).send({message:"Something went wrong"})
    }
})

/*****************  POST METHOD  **************************/

calculate.post("/create",async(req,res)=>{
    const payload=req.body
    try{
        const newData= new CalculateModel(payload)
        await newData.save()
        res.status(200).send({message:"Note Created Successfully"})
    }catch(err){
        console.log(err)
        res.status(400).send({message:"Something went wrong"})
    }
})

module.exports={calculate}