const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Wave = new Schema({
    wave_Name: String,
    backgroundImg: String,
    description: String,
    Songs: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Songs'
        }
    ]
})

module.exports = mongoose.model('Wave', Wave)