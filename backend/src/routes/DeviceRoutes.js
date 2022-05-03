const express = require('express')
const Controllers = require('../controllers')

const controller = Controllers.DeviceController

const router = express.Router()

router.get('/', controller.get)
router.get('/:id', controller.getOne)
router.post('/', controller.post)
router.put('/:id/:key', controller.put)
router.delete('/:id/:key', controller.delete)

module.exports = router