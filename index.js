const express = require("express");
const app = express();
const PORT = 8080;
const axios = require("axios")
const bodyParser = require('body-parser'); 

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
console.log(user);
  
})

app.listen(PORT,()=>{
    console.log(`server runnign at ${PORT}`);
})