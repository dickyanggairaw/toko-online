const pool = require('../config')

class Product {
    constructor(id, nama, image, harga, stock, description) {
        this.id = id,
        this.nama = nama,
        this.image = image
        this.harga = harga,
        this.stock = stock,
        this.description = description
    }
    static findAll () {
        return new Promise((resolve, reject) => {
            const getProduct = 'SELECT * FROM products'
            pool.query(getProduct, (err, datas) => {
                if(err){
                    reject(err)
                }else{
                    const products = datas.rows
                    const result = products.map(product => {
                        return new Product(product.id, product.nama, product.image, product.harga, product.stock, product.description)
                    })
                    resolve(result)
                }
            })
        })
    }
    static validationProduct (data) {
        let errors = []        

        if(!data.nama) {errors.push(`nama is required`)}
        if(!data.image) {errors.push(`image is required`)}
        if(!data.harga) {errors.push(`harga is required`)}
        if(!data.stock) {errors.push(`stock is required`)}
        if(!data.description) {errors.push(`description is required`)}

        return errors
    }
    static create (body) {
        return new Promise((resolve, reject) => {
            let errors = Product.validationProduct(body)
            
            if(errors.length) {
                reject(errors)
            }else{
                let instance = new Product(null, body.nama, body.image, body.harga, body.stock, body.description)
                let addProduct = `INSERT INTO products(nama, image, harga, stock, description)
                VALUES ($1, $2, $3, $4, $5) RETURNING *`
                let values = [instance.nama, instance.image, instance.harga, instance.stock, instance.description]
                pool.query(addProduct, values, (err, result) => {
                    if(err) {
                        reject(err)
                    }else{
                        resolve(result)
                    }
                })
            }
        })
    }
    static findOne (id) {
        return new Promise((resolve, result) => {
            let findProduct = `SELECT * FROM products WHERE id = $1`
            let value = [+id]
            pool.query(findProduct, value, (err, data) => {
                if(err) {
                    reject(err)
                }else{
                    resolve(data)
                }
            })
        })
    }
    static updateOne (id, body) {
        return new Promise((resolve, reject) => {
            let errors = this.validationProduct(body)
            if(errors.length) {
                reject(errors)
            }else{
                let instance = new Product(null, body.nama, body.image, body.harga, body.stock, body.description)
                let editProduct = `UPDATE products
                SET nama = $1,
                    image = $2,
                    harga = $3,
                    stock = $4,
                    description = $5
                WHERE id = $6;`
                let values = [
                    instance.nama,
                    instance.image,
                    instance.harga,
                    instance.stock,
                    instance.description,
                    +id
                ]

                pool.query(editProduct, values, (err, result) => {
                    if(err) {
                        reject(err)
                    }else{
                        resolve(result)
                    }
                })
            }
        })
    }
    static destroy (id) {
        return new Promise((resolve, reject) => {
            let deleteProduct = `DELETE FROM products WHERE id = $1`
            let value = [+id]
            pool.query(deleteProduct, value, (err, result) => {
                if(err) {
                    reject(err)
                }else {
                    resolve(result)
                }
            })
        })
    }
}

module.exports = Product