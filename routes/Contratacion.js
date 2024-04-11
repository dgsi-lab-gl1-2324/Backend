var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var solicitud = require('../models/Contratacion');
mongoose.set('strictQuery', false);
var db = mongoose.connection;

router.post('/', function(req, res) {
    var newSolicitud = new solicitud(req.body);
    newSolicitud.save(function(err, solicitud) {
      if (err) 
        res.status(500).send(err);
      else 
        res.status(201).json(solicitud);
      
    });
  });
  router.get('/:nombreUsuario', function(req, res)
  { var nombreUsuario = req.params.nombreUsuario; 
    solicitud.find({ nombreUsuario: nombreUsuario }, function(err, solicitudes) 
  { 
    if (err)  
        res.status(500).send(err);
    else  
        res.status(200).json(solicitudes); 
 });
 });
router.put('/:id', function(req, res) {
  var id = req.params.id;
  var resolucion = req.body.resolucion;

  solicitud.findByIdAndUpdate(id, { resolucion: resolucion }, { new: true }, function(err, updatedSolicitud) {
    if (err)
      res.status(500).send(err);
    else if (!updatedSolicitud)
      res.status(404).send("Solicitud not found");
    else
      res.status(200).json(updatedSolicitud);
  });
});
