const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: String,
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
  orders: [
    {
      order_id: String,
      products: [
        {
          product_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
          },
          quantity: Number,
          total_price: Number,
        },
      ],
      order_date: Date,
    },
  ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
