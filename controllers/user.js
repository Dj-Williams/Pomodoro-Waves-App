const Wave = require('../models/Waves')
const User = require('../models/User')

const userController = {
    new: (req, res) => {
        res.send('Yo! This is your uer controller! If you can see me, then I work son!')
    }
}

const wavesController = {
    new: (req, res) => {
        res.send('Yo! This is your waves controller! If you can see me, then I work son!')
    }
}


module.exports = wavesController