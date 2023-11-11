const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: String,
  parent_category: String,
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
