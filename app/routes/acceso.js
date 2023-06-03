const router = require('express').Router()
const controller = require('../controller/accesoController');

router.get("", controller.obtenerAccesos) 
router.get("/:id", controller.obtenerAccesoPorId) 
router.post("/auth", controller.obtenerAcceso) 
router.post("", controller.crearAcceso) 
router.put("/:id", controller.actualizarAcceso) 
router.delete("/:id", controller.eliminarAcceso) 

module.exports = { router }