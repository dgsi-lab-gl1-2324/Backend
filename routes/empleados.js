var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var empleados = require('../models/empleados');
mongoose.set('strictQuery', false);
var db = mongoose.connection;

router.get('/', function(req, res, next) {
    empleados.findOne({user: req.query.nombre}, function(err, user){
        if(err)
            return res.status(500).send('Error en la comprobación de usuario');
        
        if(user){
            if(user.pass === req.query.pass)
                return res.status(200).json(user);
            else 
                return res.status(400).json({message: 'Incorrect password'});
            
        }
        return res.status(400).json({message: 'The user does not exist'});
    });

});