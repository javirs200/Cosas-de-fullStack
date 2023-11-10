const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.static('public'));

const ejercicio1Router = require('./routes/ejercicio1Router.routes')
const ejercicio2Router = require('./routes/ejercicio2Router.routes')

// Configuración motor plantilla PUG
app.set('view engine', 'pug');
app.set('views','./views');


app.use(ejercicio1Router);
app.use(ejercicio2Router)

app.get('/', (req, res) => {
    res.render('index.pug')
})

app.get('/index', (req, res) => {
    res.redirect('/')
})

app.get("*",(req,res)=>{
    res.status(404).send("404 not found");
})

app.listen(port, () => { //puerto por donde sale la respuesta a la peticion
    console.log(`Example app listening on port on http://localhost:${port}`);
  })

  