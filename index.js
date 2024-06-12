import express from "express"
const app = express();

app.listen(3000,()=>{
    console.log("sever is running at port 3000");
})

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.get('/contact',(req,res)=>{
    res.send("contact me to kill")
})

app.get('/about',(req,res)=>{
    res.send("naam toh suna hi hoga")
})
