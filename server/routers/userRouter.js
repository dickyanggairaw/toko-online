const express = require('express')
const router = express.Router()

const { UserController } = require('../controllers')

router.post('/register', UserController.registrasi)
router.post('/login', UserController.login)


module.exports = router