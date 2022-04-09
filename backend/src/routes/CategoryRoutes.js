const express = require('express')
const CategoryController = require('../controllers/CategoryController')

const router = express.Router()

router.get('/', CategoryController.get)
router.get('/:id', CategoryController.getOne)
router.post('/', CategoryController.post)
router.put('/:id', CategoryController.put)
router.delete('/:id', CategoryController.delete)

module.exports = router