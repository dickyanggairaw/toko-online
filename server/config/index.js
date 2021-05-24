const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    localhost: 'localhost',
    database: 'toko-online',
    password: 'postgres',
    port: 5432,
})

module.exports = pool