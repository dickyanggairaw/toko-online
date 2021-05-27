const express = require('express')
const router = express.Router()

const { BannerController } = require('../controllers')
const { authentication, authorization } = require('../middlewares')

router.get('/', BannerController.getAllBanner)

router.use(authorization)
router.post('/', authentication, BannerController.addBanner)
router.delete('/:id', authentication, BannerController.deleteBanner)

module.exports = router