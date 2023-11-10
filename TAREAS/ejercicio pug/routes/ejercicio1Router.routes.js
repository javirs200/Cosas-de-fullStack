const ejercicio1Router = require('express').Router()

const aboutRoutes = require('../routes/ejercicio1/about.routes')
const locationRoutes = require('../routes/ejercicio1/location.routes')
const missionRoutes = require('../routes/ejercicio1/mission.routes')
const contactRoutes = require('../routes/ejercicio1/contact.routes')

ejercicio1Router.use('/about',aboutRoutes);
ejercicio1Router.use('/location',locationRoutes);
ejercicio1Router.use('/mission',missionRoutes);
ejercicio1Router.use('/contact',contactRoutes);

module.exports = ejercicio1Router