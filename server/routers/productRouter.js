const express = require('express')
const router = express.Router()

const { ProductController } = require('../controllers')
const { authorization, authentication } = require('../middlewares')

router.get('/', ProductController.getAllProducts)

router.use(authorization)
router.get('/:id', ProductController.getProductById)
router.post('/', authentication, ProductController.createProduct)
router.put('/:id', authentication, ProductController.editProduct)
router.delete('/:id', authentication, ProductController.deleteProduct)

module.exports = router