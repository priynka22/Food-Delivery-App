const ProductModel = require('../models/products');

const getProduct = async (req, res) => {
  const results = await ProductModel.find({});
  console.log(results);
  return res.status(200).send(results);
};

module.exports = {
  getProduct
};