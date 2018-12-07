'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const disneyFilmSchema = new Schema({
    name: String,

    year: Number,

    protagonist: String

})

// 'film' is name of the collection in the database
const DisneyFilm = mongoose.model('film', disneyFilmSchema);

module.exports = DisneyFilm;