const jwt = require('jsonwebtoken')

const secretKey = process.env.SECRET_KEY || 'kucing'

function getToken(user) {
    const token = jwt.sign({
        id: user.id,
        email: user.email
    }, secretKey)
    return token
}

function verifyToken(token) {
    const decoded = jwt.verify(token, secretKey)
    return decoded
}

module.exports = {
    getToken,
    verifyToken
}