const { User } = require('../models')
const { getToken, comparedPassword } = require('../helpers')

class UserController {
    static async registrasi ( req, res, next ) {
        try {
            const user = await User.create(req.body)
            console.log(user)
            res.status(201).json({
                id: user.rows[0].id,
                email: user.rows[0].email
            })
        } catch (error) {
            next(error)
        }
    }
    static async login ( req, res, next ) {
        try {
            const user = await User.findOne(req.body.email)

            if(user.rows[0] && comparedPassword(req.body.password, user.rows[0].password)) {
                const access_token = getToken(user.rows[0])
                res.status(200).json({
                    access_token: access_token
                })
            } else {
                next({
                    code: 400,
                    message: 'email or password wrong'
                })
            }
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController