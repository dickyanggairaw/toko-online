const seedProducts = require('./products')
const pool = require('../config')

seedProducts()
    .then((data) => {
        pool
            .query(data)
            .then(res => console.log('products success'))
            .catch(e => console.error(e.stack))
    })