const Brand = require('../models/brand')
const Product = require('../models/product')

//controller funcitons

const createBrand = async (req,res)=>{
    try{
        const brand = new Brand ({
            title:req.body.title,
            city:req.body.city
        })

        await brand.save()

        return res.status(200).send({brand})

    }catch(error){
        return res.status(500).send({'error':error.message})
    }
}

const createProduct = async (req,res)=>{
    try{

        const brand = await Brand.findOne({title:req.body.brandTitle})

        const product  = new Product ({
            name:req.body.name,
            price:req.body.price,
            brand_id:brand
        })

        await product.save()

        return res.status(200).send({product})

    }catch(error){
        return res.status(500).send({'error':error.message})
    }
}

const getProductsByBrand = async (req,res)=>{
    try{

        const brand = await Brand.findOne({title:req.body.brand})
        const products = await Product.find({brand_id:brand})

        return res.status(200).send({products})

    }catch(error){
        return res.status(500).send({'error':error.message})
    }
}

const getBrands = async (req,res)=>{
    try{
        const brands = await Brand.find({})

        return res.status(200).send({brands})

    }catch(error){
        return res.status(500).send({'error':error.message})
    }
}


module.exports = {
    createBrand,
    createProduct,
    getProductsByBrand,
    getBrands

}