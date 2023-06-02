const router = require('express').Router()
const controller = require('../controller/especialidadController');

router.get("", controller.obtenerEspecialidades) 

module.exports = { router }