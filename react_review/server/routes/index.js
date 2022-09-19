const {Router} = require('express')
const controller = require('../controller')

const router = Router();

router.post('/createBrand', controller.createBrand)

router.post('/createProduct', controller.createProduct)

module.exports = router