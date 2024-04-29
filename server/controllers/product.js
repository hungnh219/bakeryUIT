const Product = require('../models/product')
const slugify = require('slugify')

const createProduct = async (req, res) => {
    if (Object.keys(req.body).length == 0) {
        return res.status(400).json({
            success: false,
            message: 'Missing product info'
        })
    }

    if (req.body && req.body.name) {
        req.body.slug = slugify(req.body.name)
    }

    const newProduct = await Product.create(req.body)
    return res.status(200).json({
        success: newProduct ? true : false,
        message: newProduct ? newProduct : 'Cant create product'
    })
}

const getAll = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({
            success: true,
            message: products,
        })
    } catch {
        res.status(400).json({
            success: false,
            message: "api fail",
        })
    }
}

module.exports = {
    createProduct,
    getAll,
}