const router = require('express').Router()
const controller = require('../controller/tiposHabitacion');

router.get("", controller.obtenerTodosTiposHabitacion) 

module.exports = { router }