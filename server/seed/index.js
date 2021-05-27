const seedProducts = require('./products')
const seedUsers = require('./user')
const pool = require('../config')

seedProducts()
    .then((data) => {
        pool
            .query(data)
            .then(res => console.log('products success'))
            .catch(e => console.error(e.stack))
    })

seedUsers()
    .then((data) => {
        pool
            .query(data)
            .then(res => console.log("seed User Success"))
            .catch(e => console.log(e.stack))
    })