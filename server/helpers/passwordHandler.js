const bcrypt = require('bcryptjs')

function hashPassword(password) {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    return hash
}

function comparedPassword(userPassword, databasePassword) {
    const compared = bcrypt.compareSync(userPassword, databasePassword)
    return compared
}

module.exports = {
    hashPassword,
    comparedPassword
}