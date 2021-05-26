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
      const cart = await Cart.create(req.currentUser.id, req.params.id, 1)
      res.status(201).json(cart.rows[0])
    } catch (error) {
      next(error)
    }
  }

  static async deleteCart ( req, res, next ) {
    try {
      const cart = await Cart.destroy(req.params.id)
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

  static async updateStock ( req, res, next ) {
    try {
      const cart = await Cart.updateOne(req.params.id, req.body.cart_stock)
      if(cart.rowCount) {
        res.status(200).json({
          message: "Success update cart stock"
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