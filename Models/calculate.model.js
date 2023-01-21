const mongoose=require("mongoose")

const calculateSchema=mongoose.Schema({
    Instalment:Number,
    Interest:Number,
    Years:Number,
})

const CalculateModel=mongoose.model("calculate",calculateSchema);

module.exports={CalculateModel}