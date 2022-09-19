const {Router} = require('express')
const controller = require('../controller')

const router = Router();

router.post('/createBrand', controller.createBrand)

router.post('/createProduct', controller.createProduct)

router.get('/productsByBrand', controller.getProductsByBrand)

router.get('/brands', controller.getBrands)

module.exports = router