const express = require("express");
const app = express();
const PORT = 8080;
const axios = require("axios")
app.get("/",(req,res)=>{
    res.send("server working")
    axios.get(`https://jsonplaceholder.typicode.com/todos/`)
    .then((result) => console.log(result)
        
    ).catch((err) => {
        console.log(err);
    });
})

app.listen(PORT,()=>{
    console.log(`server runnign at ${PORT}`);
})