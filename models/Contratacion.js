var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContratacionSchema = new Schema({
    usuario: String,
    ubicacion: String,
    fecha: String,
    hora: String,
    descripcion: String,
    presupuesto: String,
    resolucion:{
        type: String,
        default: "Pendiente"
    }
});
module.exports = mongoose.model('Contratacion', ContratacionSchema);