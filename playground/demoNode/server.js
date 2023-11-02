const express = require('express')
const app = express()
const port = 4000

app.use(express.json())

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : "Server Is Ruuuuning",
    e : "oO",
    T : "U "
}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/weather', (req, res) => {
  res.status(200).send('Aqui va el tiempo')
})

// Query params:
// http://localhost:3000/books/quijote
// http://localhost:3000/books/
// http://localhost:3000/books/celestina
app.get("/books/:title?", (req, res) => {

  console.log(req.params.title);

  if(req.params.title){
      res.status(200).json({
          message:"Has solicitado:"+req.params.title,
          title:req.params.title,
          success:true,
          data:{
              "title": "Hamlet",
              "author":"Shakespeare",
              "pages": 2000,
              "year":1550,
              "description": "en un lugar de la mancha..."
            }
      });
  }else{
      res.status(200).json({
          message:"Aquí van tus libros!",
          success:true,
          data:[{
              "title": "Don Quijote de la Mancha",
              "author":"Miguel de Cervantes",
              "pages": 2000,
              "year":1550,
              "description": "en un lugar de la mancha..."
            },
            {
              "title": "Hamlet",
              "author":"Miguel de Cervantes",
              "pages": 2000,
              "year":1550,
              "description": "en un lugar de la mancha..."
            },
            {
              "title": "Lazarillo de Tormes",
              "author":"Miguel de Cervantes",
              "pages": 2000,
              "year":1550,
              "description": "en un lugar de la mancha..."
            }]
      }
          );
  }
});

/*
{
"title": "Don Quijote de la Mancha",
"author":"Miguel de Cervantes",
"pages": 2000,
"year":1550,
"description": "en un lugar de la mancha..."
}
*/
app.post("/books", (req, res) => {
  console.log(req.body);
  res.status(201).json({
      success:true,
      title:req.body.title,
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      data:req.body
  });
});

app.put("/books", (req, res) => {
  res.status(200).send("Libro editado!");
});
app.delete("/books/:title?", (req, res) => {
  res.status(200).send("Libro borrado!");
});

//ultima ruta por defecto
app.get("*",(req, res) => {
  res.status(404).send('gatito triste 404 not found')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})