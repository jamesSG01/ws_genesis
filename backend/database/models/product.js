const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  pname: { 
    type: String, 
    trim: true, 
    minlength: 1,
    maxlength: 100
  },
  _pid: {
    type: mongoose.Types.ObjectId, 
    required:true,
  },
  pcode: { 
  }
})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Task;