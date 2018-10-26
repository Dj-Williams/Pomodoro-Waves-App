const express = require('express');
const router = express.Router()
//-------------------------------------
const applicationController = require('../controllers/application')

const userController = require('../controllers/user')
//--------------------------------------
router.get('/', applicationController.index)

router.get('/user', userController.index)

module.exports = router