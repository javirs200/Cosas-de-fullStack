const express = require('express')
const app = express()
const port = 4000

const routes = require('./routes/index')

app.use(routes)

app.use(express.json())

var cowsay = require("cowsay");

let mongo = require('./utils/demo_mongodb')

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

//ultima ruta por defecto
app.get("*",(req, res) => {
  res.status(404).send('gatito triste 404 not found')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})