const Wave = require('../models/Wave')
const Song = require('../models/Song')

const waveController = {
    index: (req, res) => {
        Wave.find({}).populate('songs')
        .then((wave) => {
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
    Wave.findById(req.params.id).populate('songs')
    .then((wave) => {
        console.log(wave)
        res.render('waves/show', {wave: wave})
        })
    },
    create: (req, res) => {
    Wave.create(req.body).then(newWave => {
        console.log(newWave)
        res.redirect('/waves')
        })
    },
    delete: (req, res) => {
        Wave.findByIdAndRemove(req.params.id).then(() => {
            res.redirect('/waves')
        })
    }
}

module.exports = waveController