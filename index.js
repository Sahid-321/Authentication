const express = require("express");
const app = express();
const PORT = 8080;

app.get("/",(req,res)=>{
    res.send("server working")
})

app.listen(PORT,()=>{
    console.log(`server runnign at ${PORT}`);
})