const express = require('express')
const app = express()
const port = 3000

const calc = require('./utils/calculator')

app.get('/', (req, res) => {
  let msg = 'calculator 1 + 2 ' + calc.add(1,2) +''
  res.status(200).send(msg)
})

app.listen(port, () => {
  console.log(`listen on: http://localhost:${port}`)
})