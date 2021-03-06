const pool = require('./config')

const products = `CREATE TABLE IF NOT EXISTS products(
    id SERIAL PRIMARY KEY,
    nama VARCHAR,
    image VARCHAR,
    harga INTEGER,
    stock INTEGER,
    description VARCHAR
)`;

const users = `CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    email VARCHAR NOT NULL UNIQUE,
    password VARCHAR,
    role VARCHAR
)`;

const carts = `CREATE TABLE IF NOT EXISTS carts(
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    product_id INTEGER,
    cart_stock INTEGER
)`

const categories = `CREATE TABLE IF NOT EXISTS categories(
  id SERIAL PRIMARY KEY,
  category_name VARCHAR
)`

const banners = `CREATE TABLE IF NOT EXISTS banners(
  id SERIAL PRIMARY KEY,
  banner_address VARCHAR
)`

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
pooling(users)
    .then((data) =>{
      return pooling(carts)
    })
    .then((data) =>{
      return pooling(products)
    })
    .then((data) =>{
      return pooling(categories)
    })
    .then((data) =>{
      return pooling(banners)
    })
    .then((data) =>{
        console.log('create data table success')
        pool.end()
    })