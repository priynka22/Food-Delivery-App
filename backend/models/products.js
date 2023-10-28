const mongoose = require("mongoose");

const ProductModel = mongoose.model("dishes", {

  
  title: { type: String, required: true },
 
});

module.exports = ProductModel;