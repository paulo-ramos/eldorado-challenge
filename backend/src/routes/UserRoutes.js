const express = require('express')
const Controllers = require('../controllers')

const controller = Controllers.UserController

const router = express.Router()

router.get('/', controller.get)
router.get('/:email', controller.getOne)
router.post('/', controller.post)
router.put('/:id/:key', controller.put)
router.delete('/:id/:key', controller.delete)

module.exports = router