/**
 * Created by josemariaminambresredondo on 18/3/17.
 */
'use strict'
var fs = require('fs');
var path = require('path');
var mongoosePaginate = require('mongoose-pagination');

var Artist = require('../models/artist');
var Album = require('../models/album');
var Song = require('../models/song');

var bcrypt = require('bcrypt-nodejs');
var jwt = require('../services/jwt');

function getArtist(req, res) {
    var artistId = req.params.id;

    Artist.findById(artistId, function (err, artist) {
        if (err) {
            res.status(500).send({
                message: 'Error en la petición'
            });
        } else {
            if (!artist) {
                res.status(404).send({
                    message: 'No existe el artista'
                });
            } else {
                res.status(200).send({
                    artist: artist
                });
            }
        }
    })
}

function saveArtist(req, res) {
    var artist = new Artist();

    var params = req.body;

    artist.name = params.name;
    artist.description = params.description;
    artist.image = null;

    artist.save(function (err, artistStored) {
        if (err) {
            res.status(500).send({
                message: 'Error al guardar el artista'
            });
        } else {
            if (!artistStored) {
                res.status(404).send({
                    message: 'No se ha registrado el artista'
                });
            } else {
                res.status(200).send({
                    artist: artistStored
                });
            }
        }
    });
}

function getArtists(req, res) {
    var page = 1;
    if (req.params.page) page = req.params.page;
    else page = 2;
    var itemsPerPage = 30;

    Artist.find().sort('name').paginate(page, itemsPerPage, function (err, artists, total) {
        console.log('dentro', err, artists, total);
        if (err) {
            res.status(500).send({
                message: 'Error en la petición'
            });
        } else {
            if (!artists) {
                res.status(404).send({
                    message: 'No existe ningún artista'
                });
            } else {
                res.status(200).send({
                    pages: total,
                    artists: artists
                });
            }
        }
    })
}

function updateArtist(req, res) {
    var artistId = req.params.id;
    var update = req.body;

    Artist.findByIdAndUpdate(artistId, update, function (err, artistUpdated) {
        if (err) {
            res.status(500).send({
                message: 'Error al guardar el artista'
            });
        } else {
            if (!artistUpdated) {
                res.status(404).send({
                    message: 'El artista no ha sido actualizado'
                });
            } else {
                res.status(200).send({
                    artist: artistUpdated
                });
            }
        }
    });
}

function deleteArtist(req, res) {
    var artistId = req.params.id;
    Artist.findByIdAndRemove(artistId, function (err, artistRemoved) {
        if (err) {
            res.status(500).send({
                message: 'Error al eliminar el artista'
            });
        } else {
            if (!artistRemoved) {
                res.status(404).send({
                    message: 'El artista no ha sido eliminado'
                });
            } else {
                Album.find({artist: artistRemoved._id}).remove(function (err, albumRemoved) {
                    if (err) {
                        res.status(500).send({
                            message: 'Error al eliminar el albúm'
                        });
                    } else {
                        if (!albumRemoved) {
                            res.status(404).send({
                                message: 'El album no ha sido eliminado'
                            });
                        } else {
                            Song.find({artist: albumRemoved._id}).remove(function (err, songRemoved) {
                                if (err) {
                                    res.status(500).send({
                                        message: 'Error al eliminar la canción'
                                    });
                                } else {
                                    if (!songRemoved) {
                                        res.status(404).send({
                                            message: 'La canción no ha sido eliminada'
                                        });
                                    } else {
                                        res.status(200).send({
                                            artist: artistRemoved
                                        });
                                    }
                                }
                            });
                        }
                    }
                });
            }
        }
    });
}

function uploadImage(req, res) {
    var artistId = req.params.id;
    var file_name = 'No subido...';

    console.log('req:', req.files, 'artistId:', artistId);
    if (req.files) {
        var file_path = req.files.image.path;
        var file_split = file_path.split('\/');
        var file_name = file_split[2];
        console.log('imagen:', file_path, file_split, file_name);

        var file_ext = file_name.split('\.')[1];

        if (file_ext == 'png' || file_ext == 'jpg' || file_ext == 'gif') {
            Artist.findByIdAndUpdate(artistId, {image: file_name}, function (err, artistUpdated) {
                console.log('err', err, artistUpdated)
                if (!artistUpdated) {
                    res.status(404).send({
                        message: 'No se ha podido actualizar el usuario'

                    });
                } else {
                    res.status(200).send({artist: artistUpdated});
                }
            });
        } else {
            res.status(200).send({
                message: 'Extensión del archivo no es correcta'
            });
        }

        console.log('imagen:', file_ext);
    } else {
        res.status(200).send({
            message: 'La imagen no se ha podido subir'
        });
    }
}
function getImageFile(req, res) {
    var imageFile = req.params.imageFile;

    var urlFile = './uploads/artist/' + imageFile;

    console.log('imge:', urlFile, imageFile);

    fs.exists(urlFile, function (exists) {
        if (exists) {
            res.sendfile(path.resolve(urlFile));
        } else {
            res.status(404).send({
                message: 'La imagen no existe'
            });
        }
    })

}

module.exports = {
    getArtist,
    saveArtist,
    getArtists,
    updateArtist,
    deleteArtist,
    uploadImage,
    getImageFile
};