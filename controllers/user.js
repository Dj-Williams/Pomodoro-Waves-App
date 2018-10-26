const Wave = require('../models/Waves')
const User = require('../models/User')



const userController = {
    index: (req, res) => {
        res.send(`Yo! This is the user index! If you can see me, then I'm working!`)
    }
}


module.exports = userController