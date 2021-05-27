const { Banner } = require('../models')

class BannerController {
  static async getAllBanner ( req, res, next ) {
    try {
      const banners = await Banner.findAll()
      res.status(200).json(banners)
    } catch (error) {
      next(error)
    }
  }

  static async addBanner ( req, res, next ) {
    try {
      const banner = await Banner.create(req.body)
      res.status(201).json(banner.rows[0])
    } catch (error) {
      next(error)
    }
  }

  static async deleteBanner ( req, res, next ) {
    try {
      const banner = await Banner.destroy(req.params.id)
      if(banner.rowCount) {
        res.status(200).json({
          message: "delete banner Success"
        })
      }else{
        next(error)
      }
    } catch (error) {
      next(error)
    }
  } 
}

module.exports = BannerController