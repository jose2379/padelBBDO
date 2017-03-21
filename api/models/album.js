/**
 * Created by josemariaminambresredondo on 18/3/17.
 */
'use strict'

var moongose = require('mongoose');
var Schema = moongose.Schema;

var AlbumSchema = Schema({
    title: String,
    description: String,
    year: Number,
    image: String,
    artist: { type: Schema.ObjectId, ref: 'Artist' }
});

module.exports = moongose.model('Album', AlbumSchema);