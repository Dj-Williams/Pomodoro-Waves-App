const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema({
    username: String,
    password: String,
})