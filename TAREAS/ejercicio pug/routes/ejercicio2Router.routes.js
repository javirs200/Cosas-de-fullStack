const ejercicio2Router = require('express').Router()

const filmRouter = require('../routes/ejercicio2/film.routes')
const homeRouter = require('../routes/ejercicio2/home.routes')

ejercicio2Router.use('/home', homeRouter);
ejercicio2Router.use('/film/:title', filmRouter); 

module.exports = ejercicio2Router;