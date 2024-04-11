var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clienteSchema = new Schema({
  nombre: String,
  correo: String,
});
module.exports = mongoose.model('Clientes', clienteSchema);