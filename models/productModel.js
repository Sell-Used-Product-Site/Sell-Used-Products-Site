const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  seller_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  title: String,
  description: String,
  price: Number,
  category: String,
  condition: String,
  location: String,
  images: [String],
  created_at: {
    type: Date,
    default: Date.now,
  },
  views: Number,
  status: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
