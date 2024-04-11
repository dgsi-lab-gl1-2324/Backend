var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contratacionSchema = new Schema({
    usuario: String,
    ubicacion: String,
    fecha: String,
    hora: String,
    descripcion: String,
    presupuesto: String,
    estado: String,
});
module.exports = mongoose.model('contratacion', contratacionSchema);