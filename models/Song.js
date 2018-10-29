const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Song = new Schema({
    song_Name: String,
    artist_Name: String,
    album_Name: String,
    songAudioURL: String
})

module.exports = mongoose.model('Song', Song)