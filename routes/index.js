const express = require('express');
const router = express.Router()

const applicationController = require('../controllers/application')

const wavesController = require('../controllers/application')

router.get('/', applicationController.index)

router.get('/', wavesController.index)

module.exports = router