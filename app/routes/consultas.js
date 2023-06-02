const router = require('express').Router()
const controller = require('../controller/consultasController');

router.get("", controller.obtenerConsultas) 
router.get("/:id", controller.obtenerConsultaPorId) 
router.post("", controller.agregarConsulta) 
router.put("/:id", controller.modificarConsulta) 
router.delete("/:id", controller.eliminarConsulta) 

module.exports = { router }