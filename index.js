const express = require("express");
require("dotenv").config();
const cors = require("cors")

const {connection} =require("./Config/db")
const {signup}=require("./Routes/signup.route")
const {login}=require("./Routes/login.route")
const {auth}=require("./Middleware/authentication")
// const {getProfile}=require("./Routes/getUser.route")
const {calculate}=require("./Routes/calculator.route")

const app=express();
app.use(express.json())
app.use(cors({
    origin:"*"
}))


app.get("/",(req,res)=>{
    res.send("Welcome to home")
})

app.use("/signup",signup)
app.use("/login",login)
app.use(auth)
// app.use("/getProfile",getProfile)
app.use("/calculate",calculate)



app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log({"mssg":"Connected successfully to DB"})
    }
    catch(err){
        console.log(err)
        console.log(({"mssg":"Connection fail to DB"}))
    }

    console.log(`listening on port ${process.env.port}`)
})