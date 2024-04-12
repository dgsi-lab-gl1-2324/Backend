var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var clientes = require('../models/clientes');
mongoose.set('strictQuery', false);
var db = mongoose.connection;

router.get('/', function(req, res, next) {
    clientes.findOne({user: req.body.correo},function(err,clientes){
        if(err)
            res.status(500).send('Error en la comprobación de usuario');
        if(!clientes)
            res.status(400).json({message: 'The user does not exist'});
        
        res.status(200).json(clientes);

    }).catch(function(err){
        res.status(500).json(err);
    });
});
router.post('/', function(req, res, next) {
    clientes.findOne({user: req.body.correo}, function(err, user){
        if(err)
            res.status(500).send('Error en la comprobación de usuario');
        
        if(user)
            res.status(400).json({message: 'The user already exists'});
        
        var newClientes = new clientes(req.body);
        newClientes.save().then(function(clientes){
        res.status(201).json(clientes);

        }).catch(function(err){
            res.status(500).json(err);
        });
    });   
});