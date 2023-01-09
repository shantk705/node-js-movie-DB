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


    
    app.get('/hello/:id',  (request, response)=> {
        let id =request.params.id;
        response.send({status:200, message:`Hello, ${id}`})
      })



      app.get('/search/:s', (request, response)=> {
        let s =request.params.string;
        if(s){
            response.send({status:200, message:"Ok",data:`${s}`})
        }else{
          response.send ({status:500, error:true, message:"you have to provide a search"}) ;
        }
        
      })
      const movies = [
        { title: 'Jaws', year: 1975, rating: 8 },
        { title: 'Avatar', year: 2009, rating: 7.8 },
        { title: 'Brazil', year: 1985, rating: 8 },
        { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
    ]

    app.get('/movies/add', (request, response)=> {})
    app.get('/movies/get', (request, response)=> {
      
            let movieList =movies.map((item)=>item);
    
            response.send({status:200, data:movieList})
      
        
    })
    app.get('/movies/edit', (request, response)=> {})
    app.get('/movies/delete', (request, response)=> {})








app.listen(port,() =>{
    console.log(`listening at http://localhost:${port}`)
})

