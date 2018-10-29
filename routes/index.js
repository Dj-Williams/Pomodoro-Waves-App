const express = require('express');
const router = express.Router()
// ↑ Boilerplate code -------------------------


// ↓ Controllers -------------------------
const applicationController = require('../controllers/application')

const userController = require('../controllers/user')
// ↑ Controllers -------------------------



// ↓ Splash Page -------------------------
router.get('/', applicationController.index)
// ↑ Splash Page -------------------------

// ↓ User Page CRUD -------------------------
// Index
router.get('/user', userController.index)
// New 
router.get('/new', userController.new)
// Show 
router.get('/:id', userController.show)
// Create
router.post('/user', userController.create)





module.exports = router