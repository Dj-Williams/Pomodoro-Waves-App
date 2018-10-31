const Wave = require('../models/Wave')

const waveController = {
    index: (req, res) => {
        Wave.find({}).then((wave) => {
            res.render('waves/index', {
                wave: wave
            })
        })
    },

    new: (req, res) => {
        res.render('waves/new')
    },

    show: (req, res) => {
        // res.send(`Yo! If you can see this, I'm working!`)
    Wave.findById(req.params.id).then((wave) => {
        res.render('waves/show', { wave: wave })
        })
    },
    create: (req, res) => {
    Wave.create(req.body).then(newWave => {
        console.log(newWave)
        res.redirect('/user/:id/waves/:id/')
        })
    }
}

module.exports = waveController