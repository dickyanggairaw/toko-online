const pool = require('../config')

class Model {
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
                        return new Model(product.id, product.nama, product.image, product.harga, product.stock, product.description)
                    })
                    resolve(result)
                }
            })
        })
    }
}

module.exports = Model