const express = require("express")
const app = express()
const port = process.env.port || 4000;

app.get('/a', (req,res)=>{
    
    res.send("ok");
})
app.get('/test', (req,res)=>{
    
    res.send({status:200, message:"ok"});
})
app.get('/test', (req,res)=>{
    
    res.send(app.get('/time', (req,res)=>{
    
        res.send( {status:200, message:<TIME/>});
    }));
})

app.listen(port,() =>{
    console.log(`listening at http://localhost:${port}`)
})

