const pool = require('../config')
const { hashPassword } = require('../helpers')

class User {
    constructor(id, email, password, role = 'customer') {
        this.id = id,
        this.email = email,
        this.password = password,
        this.role = role
    }
    
    static validationUser (data) {
        let errors = []

        if(!data.email) {errors.push('email is required')}
        if(!data.password) {errors.push('password is required')}
        
        return errors
    }

    static create (body) {
        return new Promise((resolve, reject) =>{
            let errors = User.validationUser(body)

            if(errors.length) {
                reject(errors)
            }else{
                body.password = hashPassword(body.password)
                let instance = new User(null, body.email, body.password)
                let addUser = `INSERT INTO users(email, password, role)
                               VALUES ($1, $2, $3) RETURNING *`
                let values = [instance.email, instance.password, instance.role]
                pool.query(addUser, values, (err, result) => {
                    if(err){
                        reject(err)
                    }else{
                        resolve(result)
                    }
                })
            }
        })
    }

    static findOne (email) {
        return new Promise((resolve, reject) => {
            let findUser = `SELECT * FROM users WHERE email = $1`
            let values = [email]

            pool.query(findUser, values, (err, result) => {
                if(err) {
                    reject(err)
                }else {
                    resolve(result)
                }
            })
        })
    }

    static findById (id) {
        return new Promise((resolve, reject) => {
            let findUser = `SELECT * FROM users WHERE id = $1`
            let values = [+id]

            pool.query(findUser, values, (err, result) => {
                if(err) {
                    reject(err)
                }else {
                    resolve(result)
                }
            })
        })
    }
}

module.exports = User
