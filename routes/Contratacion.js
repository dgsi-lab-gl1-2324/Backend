var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var solicitud = require('../models/Contratacion');
mongoose.set('strictQuery', false);
var db = mongoose.connection;

router.post('/', function(req, res) {
    var newSolicitud = new solicitud(req.body);
    console.log(req.body);
    newSolicitud.save(function(err, solicitud) {
      if (err) 
        res.status(500).send(err);
      else 
        console.log(solicitud);
        res.status(201).json(solicitud);
      
    });
  });

router.get('/:email', function(req, res)
{ solicitud.find({email: req.params.email}, function(err, email){
  if(err)
      return res.status(500).send('Error en la comprobación de usuario');
  
  if(email){
      console.log(email);
      return res.status(200).json(email);
  }             
  return res.json({message: 'No tiene contrataciones realizadas'});
});
});

router.get('/', function(req, res) {
  solicitud.find({ resolucion: 'Pendiente' }, function(err, contrataciones) {
    if (err)
      res.status(500).send(err);
    else if (contrataciones.length === 0)
      res.send(contrataciones);
    else
      res.status(200).json(contrataciones);
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
module.exports = router;