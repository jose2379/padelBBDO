/**
 * Created by josemariaminambresredondo on 18/3/17.
 */
'use strict'

var express = require('express');
var UserController  = require('../controllers/user');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

var multipart = require('connect-multiparty');
var md_upload = require({ uploadDir: './uploads/users'});

api.get('/probando-controlador', md_auth.ensureAuth, UserController.pruebas);
api.post('/register', UserController.saveUser);
api.post('/login', UserController.loginUser);
api.put('/update-user/:id', md_auth.ensureAuth, UserController.updateUser);

module.exports = api;