const express = require("express");
const app = express();
const PORT = 8080;
const axios = require("axios")
app.get("/",(req,res)=>{
    res.send("server working")
    axios.get(`https://jsonplaceholder.typicode.com/todos/`, { 
        headers: { "Accept-Encoding": "gzip,deflate,compress" }} )
    .then((result) => console.log(result)
        
    ).catch((err) => {
        console.log(err);
    });
})

app.post("/",(req,res)=>{
    req.body.name,
    red.body.email
})

app.listen(PORT,()=>{
    console.log(`server runnign at ${PORT}`);
})