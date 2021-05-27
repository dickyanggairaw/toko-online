const { Category } = require('../models')

class CategoryController {
    static async getAllCategory ( req, res, next ) {
        try {
            const categories = await Category.findAll()
            res.status(200).json(categories.rows)
        } catch (error) {
            next(error)
        }
    }

    static async addCategory ( req, res, next ) {
        try {
            const category = await Category.create(req.body)
            res.status(201).json(category.rows[0])
        } catch (error) {
            next(error)
        }
    } 

    static async deleteCategory ( req, res, next ) {
        try {
            const category = await Category.destroy(req.params.id)
            if(category.rowCount) {
                res.status(200).json({
                    message: "Success delete category"
                })
            }else{
                throw new Error
            }
        } catch (error) {
            next(error)
        }
    } 
}

module.exports = CategoryController