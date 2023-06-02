const router = require('express').Router()
const controller = require('../controller/doctorController');
/* const { validateToken } = require('../middleware/validateToken'); */

router.get("", controller.obtenerTodosDoctores) 
router.post("", controller.crearDoctor) 
router.get("/:id", controller.obtenerDoctorPorId) 
router.put("/:id", controller.actualizarDoctor) 
router.delete("/:id", controller.eliminarDoctor) 

module.exports = { router }