const { Product } = require('../models')

class Controller {
    static async getAllProducts ( req, res, next ) {
        try {
            const products = await Product.findAll()
            res.status(200).json(products)
        } catch (error) {
            next(error)
        }
    }
    static async createProduct ( req, res, next ) {
        try {
            const product = await Product.create(req.body)
            res.status(201).json(product.rows[0])
        } catch (error) {
            next(error)
        }
    }
    static async getProductById ( req, res, next ) {
        try {
            const product = await Product.findOne(req.params.id)
            res.status(200).json(product.rows[0])
        } catch (error) {
            next(error)
        }        
    }
    static async editProduct ( req, res, next ) {
        try {
            const product = await Product.updateOne(req.params.id, req.body)
            res.status(200).json({
                message: "Success Update Product"
            })
        } catch (error) {
            next(error)
        }
    } 
    static async deleteProduct ( req, res, next ) {
        try {
            const product = await Product.destroy(req.params.id)
            console.log(product)
            res.status(200).json({
                message: "Success delete Product"
            })
        } catch (error) {
            next(error)
        }
    } 
}

module.exports = Controller