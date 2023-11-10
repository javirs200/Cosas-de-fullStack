const about = require('express').Router()
const aboutController = require('../../controllers/ejercicio1/about.controller')

about.get('/',aboutController.getAbout)


module.exports = about