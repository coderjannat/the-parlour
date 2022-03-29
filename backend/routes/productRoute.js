const express = require("express");

const {getAllProducts, createProduct} = require("../controllers/productController");

const router = express.Router();

router.route("/allProducts").get(getAllProducts);
router.route("/allProducts/new").post(createProduct);

module.exports = router;