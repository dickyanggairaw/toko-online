const { User } = require("../models")
const { verifyToken } = require("../helpers")

async function authorization(req, res, next) {
  try {
    if (!req.headers.access_token) {
        throw { name: "Please login first" }
    }

    const user = verifyToken(req.headers.access_token)
    if (user.email && user.id) {
        const dataUser = await User.findById(user.id)
        if (dataUser.rows[0].email === user.email) {
            req.currentUser = dataUser.rows[0]
            next()
        } else {
            throw { name: "user not found" }
        }
    }
    } catch (error) {
        next(error);
    }
}
async function authentication(req, res, next) {
    try {
        if(req.currentUser.role === "admin"){
            next()
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {
  authorization,
  authentication,
}
