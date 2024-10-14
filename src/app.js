const express= require("express");
const app=express();
app.use("/test",(req,res)=>{res.send("asssalamualikum bhai1")});
app.listen(3030,()=>{
    console.log("server is running success fully.....")
});
