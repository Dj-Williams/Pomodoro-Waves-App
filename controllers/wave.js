const Wave = require('../models/Wave')
const User = require('../models/User')

const waveController = {
    show: (req, res) => {
        // res.send(`Yo! If you can see this, I'm working!`)
    Wave.findById(req.params.id).then((wave) => {
        console.log(wave)
        res.render('waves/show', { wave: wave })
        })
    }
}

module.exports = waveController