const express = require("express")
const app = express()
const port = process.env.port || 4000;

app.get('/a', (req,res)=>{
    
    res.send("ok");
})
app.get('/test', (req,res)=>{
    
    res.send({status:200, message:"ok"});
})

    
    app.get('/time', (req,res)=>{
    const time=new Date();
    const hours=time.getHours()
    const minutes= time.getMinutes();
        res.send( {status:200, message:`${hours}:${minutes}`});
    });

    


app.listen(port,() =>{
    console.log(`listening at http://localhost:${port}`)
})

