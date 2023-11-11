const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Create a new product
router.post('/', ProductController.createProduct);

// Get all products
router.get('/', ProductController.getAllProducts);

// Get a product by ID
router.get('/:id', ProductController.getProductById);

// Update a product by ID
router.put('/:id', ProductController.updateProductById);

// Delete a product by ID
router.delete('/:id', ProductController.deleteProductById);

module.exports = router;
