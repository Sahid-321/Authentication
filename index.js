const express = require("express");
const app = express();
const PORT = 8080;
const axios = require("axios")
const bodyParser = require('body-parser'); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/",(req,res)=>{
    res.send("server working")
    axios.get(`https://jsonplaceholder.typicode.com/todos/`, { 
        headers: { "Accept-Encoding": "gzip,deflate,compress" }} )
    .then((result) =res.send(result)
        
    ).catch((err) => {
        console.log(err);
    });
})

app.post("/",(req,res)=>{
   console.log(req.body); 
})

app.listen(PORT,()=>{
    console.log(`server runnign at ${PORT}`);
})