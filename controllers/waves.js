const Wave = require('../models/Waves')

const wavesController = {
    new: (req, res) => {
        res.send('Yo! This is the new route on stores. If you can see me, then I work son!')
    }
}


module.exports = wavesController