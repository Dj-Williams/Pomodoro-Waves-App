const User = require('../models/User')
const Wave = require('../models/Wave')


const userController = {
    index: (req, res) => {
        // res.send(`Yo! This is the user index! If you can see me, then I'm working!`)
    User.find({}).populate('waves') 
        .then( (user) => {
            res.render('user/index', {
                user: user})
        })
    }
}



module.exports = userController