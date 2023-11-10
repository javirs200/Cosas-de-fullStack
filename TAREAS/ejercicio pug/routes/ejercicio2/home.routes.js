const home = require('express').Router();
const homeController = require('../../controllers/ejercicio2/home.controller');

home.get('/',homeController.getHome);


module.exports = home;