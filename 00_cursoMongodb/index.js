/**
 * Created by josemariaminambresredondo on 18/3/17.
 */
'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 2379;

mongoose.connect('mongodb://localhost:27017/curso_mean2', function (err, res) {
    if(err){
        throw err;
    } else {
        console.log("BB.DD. corriendo");

        app.listen(port, function () {
            console.log('Servidor esta corriendo')
        })
    }
});