const express = require('express')
const router = express.Router()

const { CartController } = require('../controllers')
const { authorization} = require('../middlewares')

router.use(authorization)
router.get('/', CartController.getAllCart)
router.post('/', CartController.addCart)
router.delete('/', CartController.deleteCart)

module.exports = router