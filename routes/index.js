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
router.get('/user', userController.index)



module.exports = router