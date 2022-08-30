const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  sku: {
    type: String,
    require: true,
    default: 'null'
  },
  item: { 
    type: String, 
    trim: true, 
    minlength: 1,
    maxlength: 100,
    require: true,
    default: 'Unnamed-Product'
  },
  price: {
    type: Number,
    required: true
  },
  qty: {
    type: Number,
    required: true,
    default: 0
  },
  size: {
    type: String,
    default: 'M'
  },
  feature: {
    type: [String]
  },
  categories: {
    type: [String]
  },
})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;