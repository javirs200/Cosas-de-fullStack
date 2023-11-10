const location = require('express').Router()
const locationController = require('../../controllers/ejercicio1/location.controller');

location.get("/", locationController.getLocation)

module.exports = location