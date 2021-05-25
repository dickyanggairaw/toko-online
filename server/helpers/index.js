const { hashPassword, comparedPassword } = require('./passwordHandler')
const { getToken, verifyToken } = require('./tokenHandler')


module.exports = {
    hashPassword,
    comparedPassword,
    getToken,
    verifyToken
}