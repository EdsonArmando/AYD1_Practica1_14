const mongoose = require('mongoose');

const SchemaEstudiante = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    DPI: String,
    CARNE: Number,
    NOMBRES: String,
    APELLIDO: String,
    NACIONALIDAD: String,
    SEXO: String,
    IDENTIDADRACIAL: String,
    FACULTAD: String,
    CARRERA: String

});

module.exports = new mongoose.model('Estudiante', SchemaEstudiante, 'Estudiante');