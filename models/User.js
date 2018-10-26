const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema({
    username: String,
    password: String,
    favGenre: String,
    Age: Number,
    profilePic: String,
    waves: [{
        type: Schema.Types.ObjectId,
        ref: 'Waves'
    }]
})

module.exports = mongoose.model('User', User)