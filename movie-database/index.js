const express = require("express")
const app = express()
const port = process.env.port || 4000;

app.get('/a', (req,res)=>{
    res.send("ok");
})

app.listen(port,() =>{
    console.log(`listening at http://localhost:${port}`)
})

