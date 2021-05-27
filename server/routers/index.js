const express = require('express')
const router = express.Router()

const productRouter = require('./productRouter')
const userRouter = require('./userRouter')
const cartRouter = require('./cartRouter')
const bannerRouter = require('./bannerRouter')

router.get('/', (req, res) => {
    res.send('Toko Online Ku')
})

router.use('/products', productRouter)
router.use('/users', userRouter)
router.use('/carts', cartRouter)
router.use('/banners', bannerRouter)

module.exports = router