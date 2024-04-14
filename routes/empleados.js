var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var empleados = require('../models/empleados');
mongoose.set('strictQuery', false);
var db = mongoose.connection;

router.get('/:id', function(req, res, next) {
    empleados.findOne({user: req.params.id}, function(err, user){
        if(err)
            res.status(500).send('Error en la comprobación de usuario');
        
        if(user){
            res.status(200).json(user);
             
        }
        res.status(400).json({message: 'No es un empleado'});
    });

});