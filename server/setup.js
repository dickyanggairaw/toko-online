const pool = require('./config')

const products = `CREATE TABLE IF NOT EXISTS products(
    id SERIAL PRIMARY KEY,
    nama VARCHAR,
    image VARCHAR,
    harga INTEGER,
    stock INTEGER,
    description VARCHAR
)`;

const pooling = (data) => {
    return new Promise((resolve, reject) =>{
        pool.query(data, (err, result) => {
            if(err) {
                reject(err)
            }else{
                resolve(result)
            }
        })
    })
}
pooling(products)
    .then((data) =>{
        console.log('create data table success')
    })