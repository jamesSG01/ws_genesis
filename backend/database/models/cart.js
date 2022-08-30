const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  status: {
    type: 'active', 
    default: 'unactive'
  },
  qty: {
    type: Number,
    default: 0
  },
  product: {
    type: [],
    default: ""
  }
})

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;