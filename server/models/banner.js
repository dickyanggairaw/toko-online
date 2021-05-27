const pool = require('../config')

class Banner {
  constructor(id, banner_address) {
    this.id = id,
    this.banner_address = banner_address
  }

  static findAll() {
    return new Promise((resolve, reject) => {
      const banners = `SELECT * FROM banners`
      pool.query(banners, (err, result) => {
        if(err) {
          reject(err)
        }else{
          let instance = result.rows.map(banner => {
            return new Banner(banner.id, banner.banner_address)
          })
          resolve(instance)
        }
      })
    })
  }

  static create(body) {
    return new Promise((resolve, reject) => {
      let instance = new Banner(null, body.banner_address)
      let addBanner = `INSERT INTO banners(banner_address) VALUES ($1) RETURNING *`
      let values = [instance.banner_address]
      pool.query(addBanner, values, (err, result) =>{
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
      let deleteBanner = `DELETE FROM banners WHERE id = $1`
      let values = [+id]
      pool.query(deleteBanner, values, (err, result) => {
        if(err) {
          reject(err)
        }else{
          resolve(result)
        }
      })
    })
  }
}

module.exports = Banner