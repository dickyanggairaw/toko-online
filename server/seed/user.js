const fs = require('fs')
const { hashPassword } = require('../helpers')

const seedUsers = () => {
    return new Promise((resolve, reject) => {
        let dataSeedUsers = `INSERT INTO users (email, password, role) VALUES`
        fs.readFile('./data/users.json', 'utf8', (err, data) => {
            if(err) {
                reject(err)
            }else{
                data = JSON.parse(data)

                data.forEach((user, i) => {
                    user.password = hashPassword(user.password)
                    dataSeedUsers += `('${user.email}', '${user.password}', '${user.role}')`
                    if(i === data.length - 1) {
                        dataSeedUsers += `;`
                    }else{
                        dataSeedUsers += ','
                    }
                })
                resolve(dataSeedUsers)
            }
        })
    })
}

module.exports = seedUsers