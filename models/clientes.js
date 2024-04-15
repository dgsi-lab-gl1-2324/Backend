var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clienteSchema = new Schema({
  email: String,
  name: String,
});
module.exports = mongoose.model('Clientes', clienteSchema);