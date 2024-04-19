var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContratacionSchema = new Schema({
    email: String,
    nombre: String,
    ubicacion: String,
    fecha: String,
    hora: String,
    descripcion: String,
    presupuesto: String,
    resolucion: String,
});
module.exports = mongoose.model('Contratacion', ContratacionSchema);