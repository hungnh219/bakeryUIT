const Product = require('../models/product')
const slugify = require('slugify')
const data = require('../../data/product.json')

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
    console.log(data)
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

// them du lieu tu file product.json
// moi them dc tu 1 product
const getData = async (req, res) => {
    console.log(data)
    console.log(data[0].name)
    console.log(typeof(data[0].name))
    data[0].slug = slugify(data[0].name)

    console.log(data[0])

    const newProduct = await Product.create(data[0])
    return res.status(200).json({
        success: newProduct ? true : false,
        message: newProduct ? newProduct : 'Cant create product'
    })
}

module.exports = {
    createProduct,
    getAll,
    getData,
}