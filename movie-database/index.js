const { request, response } = require("express");
const express = require("express");
const app = express();
const port = process.env.port || 4000;

app.get("/a", (req, res) => {
  res.send("ok");
});
app.get("/test", (req, res) => {
  res.send({ status: 200, message: "ok" });
});

app.get("/time", (req, res) => {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  res.send({ status: 200, message: `${hours}:${minutes}` });
});

app.get("/hello/:id", (request, response) => {
  let id = request.params.id;
  response.send({ status: 200, message: `Hello, ${id}` });
});

app.get("/search/:s", (request, response) => {
  let s = request.query;
  if (s) {
    response.send({ status: 200, message: "Ok", data: s });
  } else {
    response.send({
      status: 500,
      error: true,
      message: "you have to provide a search",
    });
  }
});
const movies = [
  { title: "Jaws", year: 1975, rating: 8 },
  { title: "Avatar", year: 2009, rating: 7.8 },
  { title: "Brazil", year: 1985, rating: 8 },
  { title: "الإرهاب والكباب‎", year: 1992, rating: 6.2 },
];

app.get("/movies/add", (request, response) => {});
app.get("/movies/get", (request, response) => {
  //let movieList =movies.map((item)=>item["title"]);

  response.send({ status: 200, data: movies });
});

app.get("/movies/get/by-date", (request, response) => {
  let result = movies.sort((a, b) => b.year - a.year);
  response.send({ status: 200, data: result });
});

app.get("/movies/get/by-rating", (request, response) => {
  const result = movies.sort((a, b) => b.rating - a.rating);
  response.send({ status: 200, data: result });
});

app.get("/movies/get/by-title", (request, response) => {
  let result = movies.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    }
  });
  response.send({ status: 200, data: result });
});


 
app.get("/movies/edit", (request, response) => {});
app.get("/movies/delete", (request, response) => {});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
