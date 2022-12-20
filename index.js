const express = require("express");
const app = express();
const PORT = 8080;
const axios = require("axios")
const bodyParser = require('body-parser'); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.post("/",(req,res)=>{
   console.log(req.body); 
})

app.listen(PORT,()=>{
    console.log(`server runnign at ${PORT}`);
})