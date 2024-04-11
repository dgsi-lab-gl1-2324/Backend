var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var clientes = require('../models/clientes');
mongoose.set('strictQuery', false);
var db = mongoose.connection;

router.get('/', function(req, res, next) {
    clientes.find().then(function(clientes){
        res.status(200).json(clientes);
    }).catch(function(err){
        res.status(500).json(err);
    });
});
router.post('/', function(req, res, next) {
    var cliente = clientes(req.body);
    clientes.findOne({user: cliente.name}, function(err, user){
        if(err){
            return res.status(500).send('Error en la comprobación de usuario');
        }
        if(user){
            return res.status(400).json({message: 'The user already exists'});
        }
        cliente.save().then(function(cliente){
            res.status(201).json(cliente);
        }).catch(function(err){
            res.status(500).json(err);
        });
    });   
});