const router = require('express').Router()
const controller = require('../controller/pacienteController');

router.get("", controller.obtenerTodosPacientes) 
router.post("", controller.crearPaciente) 
router.get("/:id", controller.obtenerPacientePorId) 
router.put("/:id", controller.actualizarPaciente) 
router.delete("/:id", controller.eliminarPaciente) 

module.exports = { router }