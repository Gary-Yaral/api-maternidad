const mongoose = require('mongoose');

const especialidadSchema = new mongoose.Schema({
  especialidad: { type: String, required: true },
});

const Especialidad = mongoose.model('especialidades', especialidadSchema);

module.exports = Especialidad;
