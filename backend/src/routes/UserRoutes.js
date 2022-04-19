const express = require('express')
const UserController = require('../controllers/UserController')

const router = express.Router()

router.get('/', UserController.get)
router.get('/:email', UserController.getOne)
router.post('/', UserController.post)
router.post('/login', UserController.login)
router.put('/:id/:key', UserController.put)
router.patch('/:id/:key', UserController.patch)
router.delete('/:id/:key', UserController.delete)

module.exports = router