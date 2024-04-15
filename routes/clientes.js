var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var clientes = require('../models/clientes');
mongoose.set('strictQuery', false);
var db = mongoose.connection;

router.post('/', function(req, res, next) {
    clientes.findOne({email: req.body.email}, function(err, email){
        if(err)
            return res.status(500).send('Error en la comprobación de usuario');
        
        if(email){
            return res.json({message: 'The user already exists'});
        }else{
        var newClientes = new clientes(req.body);
        newClientes.save().then(function(clientes){
        return res.status(201).json(clientes);
        }).catch(function(err){
            return res.status(500).json(err);
        });}
    });   
});
module.exports = router;