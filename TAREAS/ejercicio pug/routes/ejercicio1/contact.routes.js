const contact = require('express').Router()
const contactController = require('../../controllers/ejercicio1/contact.controller')

contact.get('/',contactController.getMembers)


module.exports = contact