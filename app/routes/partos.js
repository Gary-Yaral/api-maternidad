const router = require('express').Router()
const controller = require('../controller/partosController');

router.get("", controller.obtenerTodosPartos) 
router.get("/:id", controller.obtenerPartoPorId) 
router.post("", controller.crearParto) 
router.put("/:id", controller.actualizarParto) 
router.delete("/:id", controller.eliminarParto) 

module.exports = { router }