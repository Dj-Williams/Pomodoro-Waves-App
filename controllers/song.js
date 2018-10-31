const Song = require('../models/Song')
const Wave = require('../models/Wave')

const songController = {
index: (req, res) => {
        const songId = req.params.songid
        Song.findById(songId).populate('song')
        // ↓ THEN send all of the products to the client(browser). 
        .then(song => {
            res.send(song)
            
        })
    },
show: (req, res) => {
    // res.send(`Yo! If you can see this, I'm working!`)
Song.findById(req.params.id)
.then((song) => {
    res.render('waves/show', {song: song})
    })
 }
}

module.exports = songController