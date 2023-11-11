const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  _id: String,
  name: String,
  parent_category: String,
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
