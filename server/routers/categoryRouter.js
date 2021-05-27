const express = require('express')
const router = express.Router()

const { CategoryController } = require('../controllers')
const { authorization, authentication } = require('../middlewares')

router.get('/', CategoryController.getAllCategory)

router.use(authorization)
router.post('/', authentication, CategoryController.addCategory)
router.delete('/:id', authentication, CategoryController.deleteCategory)


module.exports = router