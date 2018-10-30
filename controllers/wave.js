const Wave = require('../models/Wave')
const User = require('../models/User')

const waveController = {
    show: (req, res) => {
        res.send(`Yo! If you can see this, I'm working!`)
    }
}

module.exports = waveController