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
router.get('/user/new', userController.new)
// Show 
router.get('/user/:id', userController.show)
// Create
router.post('/user', userController.create)
// Edit
router.get('/:id/edit', userController.edit)
// Update! (As of now, Does not work!)
router.put('/:id', userController.update)
router.patch('/:id', userController.update)
// Delete!
router.delete('/:id', userController.delete)




module.exports = router