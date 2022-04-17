const express = require('express')
const DeviceController = require('../controllers/DeviceController')

const router = express.Router()

router.get('/', DeviceController.get)
router.get('/:id', DeviceController.getOne)
router.post('/', DeviceController.post)
router.put('/:id/:key', DeviceController.put)
router.patch('/:id/:key', DeviceController.patch)
router.delete('/:id/:key', DeviceController.delete)

module.exports = router