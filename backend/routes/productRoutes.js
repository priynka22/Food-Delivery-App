const express= require("express")

const router = express.Router()

const { getProduct } = require("../controller/productController")

router.get("/products", getProduct)


module.exports = router