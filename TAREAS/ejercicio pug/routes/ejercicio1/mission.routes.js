const mission = require('express').Router()
const missionController = require('../../controllers/ejercicio1/mission.controller');

mission.get("/", missionController.getMission);


module.exports = mission