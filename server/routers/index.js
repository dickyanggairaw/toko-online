const express = require('express')
const router = express.Router()

const productRouter = require('./productRouter')
const userRouter = require('./userRouter')
const cartRouter = require('./cartRouter')

router.get('/', (req, res) => {
    res.send('Toko Online Ku')
})

router.use('/products', productRouter)
router.use('/users', userRouter)
router.use('/carts', cartRouter)

module.exports = router