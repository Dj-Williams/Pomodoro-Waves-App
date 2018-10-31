const User = require('../models/User')
const Wave = require('../models/Wave')


const userController = {
    index: (req, res) => {
    User.find({}).populate('songs') 
        .then( (user) => {
            res.render('user/index', {
                user: user})
        })
    },
    new: (req, res) => {
        res.render('user/new')
    },
    show: (req, res) => {
    User.findById(req.params.id).populate('waves')
    .then(user => {
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
            res.redirect(`/user/${updatedUser._id}`)
        })
    },
    delete: (req, res) => {
        User.findByIdAndRemove(req.params.id).then(() => {
            res.redirect('/user')
        })
    }


}
module.exports = userController