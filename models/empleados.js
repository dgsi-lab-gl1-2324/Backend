var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var empleadoSchema = new Schema({
  nombre: String,
  correo: String,
  pass: String,
});
module.exports = mongoose.model('Empleado', empleadoSchema);