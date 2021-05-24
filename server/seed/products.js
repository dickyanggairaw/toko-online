const fs = require('fs')

const seedProducts = () => {
    return new Promise((resolve, reject) => {
        let dataSeedProducts = `INSERT INTO products (nama, image, harga, stock, description) VALUES`
        fs.readFile('./data/products.json', 'utf8', (err, data) => {
            if(err){
                reject(err)
            }else{
                data = JSON.parse(data)
                data.forEach((product, i) => {
                    dataSeedProducts += `('${product.nama}', '${product.image}', '${product.harga}', '${product.stock}', '${product.description}')`
                    if(i === data.length - 1){
                        dataSeedProducts += ';'
                    }else{
                        dataSeedProducts += ','
                    }
                })
                resolve(dataSeedProducts)
            }
        })
    })
}


module.exports = seedProducts