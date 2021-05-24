const express = require('express')
const router = express.Router()

const { ProductController } = require('../controllers')

router.get('/', ProductController.getAllProducts)
router.post('/', ProductController.createProduct)
router.get('/:id', ProductController.getProductById)
router.put('/:id', ProductController.editProduct)
router.delete('/:id', ProductController.deleteProduct)

module.exports = router