const mongoose = require('mongoose');

const SchemaEstudiante = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    dpi: String,
    carne: Number,
    nombres: String,
    apellido: String,
    nacionalidad: String,
    identidadracial: String,
    facultad: String,
    carrera: String

});

module.exports = new mongoose.model('Estudiante', SchemaEstudiante, 'Estudiante');