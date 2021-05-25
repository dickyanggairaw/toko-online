const { Cart } = require('../models')

class CartController {
  static async getAllCart ( req, res, next ) {
    try {
      const carts = await Cart.FindAll(req.currentUser.id)
      res.status(200).json(carts.rows)
    } catch (error) {
      next(error)
    }
  }

  static async addCart ( req, res, next ) {
    try {
      const cart = await Cart.create(req.currentUser.id, req.body.id, 1)
      res.status(201).json(cart.rows[0])
    } catch (error) {
      next(error)
    }
  }
  static async deleteCart ( req, res, next ) {
    try {
      const cart = await Cart.destroy(req.currentUser.id, req.body.id)
      if(cart.rowCount) {
        res.status(200).json({
          message: "Success delete cart"
        })
      } else {
        throw new Error
      }
      
    } catch (error) {
      next(error)
    }
  }
}

module.exports = CartController