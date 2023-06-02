const router = require('express').Router()
const controller = require('../controller/habitacionesController');

router.get("", controller.obtenerTodasHabitaciones) 
router.get("/:id", controller.obtenerHabitacionPorId) 
router.post("", controller.crearHabitacion) 
router.put("/:id", controller.actualizarHabitacion) 
router.delete("/:id", controller.eliminarHabitacion) 

module.exports = { router }