var mongoose = require('mongoose');  
var productSchema = new mongoose.Schema({  
  sku: String,
  type: String,
  title: String,
  description: String
});
mongoose.model("productCatalog", productSchema,"productCatalog");
