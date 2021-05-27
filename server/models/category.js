const pool = require('../config')

class Category {
  constructor(id, category_name) {
    this.id = id,
    this.category_name = category_name
  }

  static findAll() {
    return new Promise((resolve, reject) => {
      const categories = `SELECT * FROM categories`
      pool.query(categories, (err, result) => {
        if(err) {
          reject(err)
        }else{
          let instance = result.rows.map(category => {
            return new Category(category.id, category.category_name)
          })
          resolve(instance)
        }
      })
    })
  }

  static create(body) {
    return new Promise((resolve, reject) => {
      let instance = new Category(null, body.category_name)
      let addCategory = `INSERT INTO categories(category_name) VALUES ($1) RETURNING *`
      let values = [instance.category_name]
      pool.query(addCategory, values, (err, result) =>{
        if(err) {
          reject(err)
        }else{
          resolve(result)
        }
      })
    })
  }

  static destroy(id) {
    return new Promise((resolve, reject) => {
      let deleteCategory = `DELETE FROM categories WHERE id = $1`
      let values = [+id]
      pool.query(deleteCategory, values, (err, result) => {
        if(err) {
          reject(err)
        }else{
          resolve(result)
        }
      })
    })
  }
}

module.exports = Category