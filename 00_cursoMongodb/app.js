/**
 * Created by josemariaminambresredondo on 18/3/17.
 */
'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Carga de rutas
var user_routes = require('./routes/user');
var artist_routes = require('./routes/artist');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Configurar las cabeceras http

// Rutas base
app.use('/api', user_routes);
app.use('/api', artist_routes);

module.exports = app;