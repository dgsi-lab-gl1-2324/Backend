var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var empleadoSchema = new Schema({
  email: String,
  name: String,  
});
module.exports = mongoose.model('Empleado', empleadoSchema);