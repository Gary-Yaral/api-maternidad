const router = require('express').Router()
const controller = require('../controller/tiposPartoController');

router.get("", controller.obtenerTodosTiposParto) 

module.exports = { router }