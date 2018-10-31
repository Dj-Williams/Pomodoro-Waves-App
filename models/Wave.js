const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Wave = new Schema({
    wave_Name: String,
    backgroundImg: String,
    description: String,
    songs: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Song'
        }
    ]
})

module.exports = mongoose.model('Wave', Wave)