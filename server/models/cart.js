const pool = require("../config")

class Cart {
    constructor(id, user_id, product_id, cart_stock){
      this.id = id,
      this.user_id = user_id,
      this.product_id = product_id,
      this.cart_stock = cart_stock
    }
    static FindAll(id) {
      return new Promise((resolve, reject) => {
        let carts = `SELECT* FROM carts
        JOIN products
        ON carts.product_id = products.id
        WHERE user_id = $1`

        let values = [+id]
        pool.query(carts, values, (err, result) => {
          if(err){
            reject(err)
          }else{
            resolve(result)
          }
        })
      })
    }

    static create(user_id, product_id, cart_stock) {
      return new Promise((resolve, reject) => {
          let instance = new Cart(null, user_id, product_id, cart_stock)
          let addCart = `INSERT INTO carts(user_id, product_id, cart_stock) VALUES
          ($1, $2, $3) RETURNING *`
          let values = [instance.user_id, instance.product_id, instance.cart_stock]
          pool.query(addCart, values, (err, result) => {
            if(err){
              reject(err)
            }else{
              resolve(result)
            }
          })
      })
    }
    static destroy(user_id, product_id) {
      return new Promise((resolve, reject) => {
        let deleteCart = `DELETE FROM carts WHERE product_id = $1 AND user_id = $2`
        let values = [+product_id, +user_id]
        pool.query(deleteCart, values, (err, result) => {
          if(err){
            reject(err)
          }else{
            resolve(result)
          }
        })
      })
    }
}

module.exports = Cart