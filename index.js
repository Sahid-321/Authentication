const express = require("express");
const app = express();
const PORT = 8080;
const axios = require("axios")
const bodyParser = require('body-parser'); 
const jwt = require('jsonwebtoken')
require('dotenv').config();
app.use(express.json());
const posts = [{
    name: "sahid",
    mob:9005
},
{
    name: "jamal",
    mob: 5009
}
]

app.get("/",(req,res)=>{
    res.json(posts)
   
})

app.post("/login",(req,res)=>{
    const username = req.body.username;
    const user = {name:username}
   const accessToken =  jwt.sign(user, process.env.ACCESS_TOKEN)
res.json(accessToken)
  
})

app.listen(PORT,()=>{
    console.log(`server runnign at ${PORT}`);
})