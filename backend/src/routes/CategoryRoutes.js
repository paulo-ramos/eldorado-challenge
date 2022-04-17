const express = require('express')
const CategoryController = require('../controllers/CategoryController')

const router = express.Router()

router.get('/', CategoryController.get)
router.get('/:id', CategoryController.getOne)
router.post('/', CategoryController.post)
router.put('/:id/:key', CategoryController.put)
router.patch('/:id/:key', CategoryController.patch)
router.delete('/:id/:key', CategoryController.delete)

module.exports = router