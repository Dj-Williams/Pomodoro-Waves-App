const User = require('../models/User')
const Wave = require('../models/Wave')


const userController = {
    // This send all the users to 
    index: (req, res) => {
        // res.send(`Yo! This is the user index! If you can see me, then I'm working!`)
    User.find({}).populate('waves') 
        .then( (user) => {
            res.render('user/index', {
                user: user})
        })
    },
    new: (req, res) => {
        res.render('user/new')
    },
    show: (req, res) => {
    User.findById(req.params.id).then((user) => {
        res.render('user/show', {user: user})
        })
    },
    create: (req, res) => {
      User.create(req.body).then(newUser => {
        res.redirect(`/user`)
        })
    },
    edit: (req, res) => {
        User.findById(req.params.id).then
        (user => {
            res.render('user/edit', {
                user: user})
        })
    },
    update: (req, res) => {
        User.findByIdAndUpdate(req.params.id, req.body).then((updatedUser) => {
            res.redirect(`/${updatedUser._id}`)
        })
    },


}
module.exports = userController