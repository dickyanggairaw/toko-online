const express = require('express')
const router = express.Router()

const { CartController } = require('../controllers')
const { authorization, authorize} = require('../middlewares')

router.use(authorization)
router.get('/', CartController.getAllCart)
router.post('/:id', CartController.addCart)
router.delete('/:id', authorize, CartController.deleteCart)
router.patch('/:id', authorize, CartController.updateStock)

module.exports = router