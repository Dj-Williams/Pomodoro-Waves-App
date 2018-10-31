const express = require('express');
const router = express.Router()
// ↑ Boilerplate code -------------------------


// ↓ Controllers -------------------------
const applicationController = require('../controllers/application')

const userController = require('../controllers/user')

const waveController = require('../controllers/wave')

const songController = require('../controllers/song')
// ↑ Controllers -------------------------



// ↓ Splash Page -------------------------
router.get('/', applicationController.index)
// ↑ Splash Page -------------------------



// ↓ User Page CRUD -------------------------

// Index
router.get('/user', userController.index)
// New (Form)
router.get('/user/new', userController.new)
// Show 
router.get('/user/:id', userController.show)
// Create
router.post('/user', userController.create)
// Edit
router.get('/:id/edit', userController.edit)
// Update! 
router.put('/:id', userController.update)
router.patch('/:id', userController.update)
// Delete!
router.delete('/:id', userController.delete)

// ↑ User Page CRUD -------------------------

// ↓ Waves Page CRUD -------------------------

// Index 
router.get('/waves', waveController.index)
// New (Form) ✓
router.get('/waves/new', waveController.new)
// Show (Individual Page) ✓
router.get('/user/:id/waves/wavesid', waveController.show)
// Create
router.post('/waves', waveController.create)
// Delete!
router.delete('/:id', waveController.delete)


// ↑ Waves Page CRUD --------------------------

router.get('/user/:id/waves/wavesid', songController.index)

router.get('/user/:id/waves/wavesid', songController.show)

module.exports = router