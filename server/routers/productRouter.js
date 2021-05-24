const express = require('express')
const router = express.Router()

const { ProductController } = require('../controllers')

router.get('/', ProductController.getAllProducts)

module.exports = router