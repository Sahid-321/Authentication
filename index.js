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

app.get("/", authenticationToken,(req,res)=>{
    res.json(posts.filter(elem=> elem.username === req.user.name))
   
})

app.post("/",(req,res)=>{
    const username = req.body.username;
    const user = {name:username}
   const accessToken =  jwt.sign(user, process.env.ACCESS_TOKEN)
res.json(accessToken)
  
})

function authenticationToken(req,res,next){
    const authHeader = req.headers['authorization'];
const token = authHeader && authHeader.split(' ')[1];
if(token == null) return res.sendStatus(401);

jwt.verify(token, process.env.ACCESS_TOKEN,(err,user)=>{
    if(err) return res.sendStatus(403);
req.user=user

console.log(user);
next()
})
}
app.listen(PORT,()=>{
    console.log(`server runnign at ${PORT}`);
})