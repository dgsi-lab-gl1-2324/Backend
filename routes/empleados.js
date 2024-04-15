var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var empleados = require('../models/empleados');
mongoose.set('strictQuery', false);
var db = mongoose.connection;

router.get('/', function(req, res, next) {
    empleados.findOne({email: req.query.email}, function(err, email){
        if(err)
            return res.status(500).send('Error en la comprobación de usuario');
        
        if(email){
            console.log(email);
            return res.status(200).json(email);
        }             
        return res.json({message: 'No es un empleado'});
    });

});
module.exports = router;