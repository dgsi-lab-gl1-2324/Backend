var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var solicitudContratacionSchema = new Schema({
    usuario: String,
    ubicacion: String,
    fecha: String,
    hora: String,
    descripcion: String,
    presupuesto: String,
});
module.exports = mongoose.model('solicitudContratacion', solicitudContratacionSchema);