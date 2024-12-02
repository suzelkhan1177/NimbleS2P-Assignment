const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

/**
 * @swagger
 * /product/add:
 *   post:
 *     summary: Add a new product
 *     description: Adds a new product to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Laptop
 *               price:
 *                 type: number
 *                 example: 1000.50
 *               quantity:
 *                 type: integer
 *                 example: 10
 *               description:
 *                 type: string
 *                 example: High-performance laptop
 *     responses:
 *       201:
 *         description: Product added successfully.
 */
router.post('/add', productController.addProduct);

/**
 * @swagger
 * /product:
 *   get:
 *     summary: Get all products
 *     description: Fetches all products from the database.
 *     responses:
 *       200:
 *         description: List of products.
 */
router.get('/', productController.getAllProducts);

/**
 * @swagger
 * /product/{id}:
 *   get:
 *     summary: Get a product by ID
 *     description: Fetches a product by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Product details.
 *       404:
 *         description: Product not found.
 */
router.get('/:id', productController.getProductById);

/**
 * @swagger
 * /product/{id}:
 *   put:
 *     summary: Update a product
 *     description: Updates a product by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               quantity:
 *                 type: integer
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Product updated successfully.
 */
router.put('/:id', productController.updateProduct);

/**
 * @swagger
 * /product/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     description: Deletes a product from the database based on its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Product deleted successfully.
 *       404:
 *         description: Product not found.
 */
router.delete('/:id', productController.deleteProduct);

module.exports = router;
