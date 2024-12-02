const db = require('../config/mysql'); 
const logger = require('../config/logger');


module.exports.addProduct = async (req, res) => {
    try {
        const { name, price, quantity, description } = req.body;
        if (!name || !price || !quantity) {
            logger.warn('Missing required fields for product creation');
            return res.status(400).json({ message: 'Name, price, and quantity are required.' });
        }
        const [result] = await db.execute(
            'INSERT INTO Product (name, price, quantity, description) VALUES (?, ?, ?, ?)',
            [name, price, quantity, description || null]
        );
        logger.info(`Product added with ID: ${result.insertId}`);
        res.status(201).json({ message: 'Product added successfully', productId: result.insertId });
    } catch (error) {
        logger.error('Error adding product: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


module.exports.getAllProducts = async (req, res) => {
    try {
        const [products] = await db.execute('SELECT * FROM Product');
        logger.info('Fetched all products');
        res.status(200).json(products);
    } catch (error) {
        logger.error('Error fetching products: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


module.exports.getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const [product] = await db.execute('SELECT * FROM Product WHERE id = ?', [id]);
        if (product.length === 0) {
            logger.warn(`Product with ID: ${id} not found`);
            return res.status(404).json({ message: 'Product not found' });
        }
        logger.info(`Fetched product with ID: ${id}`);
        res.status(200).json(product[0]);
    } catch (error) {
        logger.error('Error fetching product by ID: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


module.exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, quantity, description } = req.body;
        const [result] = await db.execute(
            'UPDATE Product SET name = ?, price = ?, quantity = ?, description = ? WHERE id = ?',
            [name, price, quantity, description, id]
        );
        if (result.affectedRows === 0) {
            logger.warn(`Product with ID: ${id} not found`);
            return res.status(404).json({ message: 'Product not found' });
        }
        logger.info(`Updated product with ID: ${id}`);
        res.status(200).json({ message: 'Product updated successfully' });
    } catch (error) {
        logger.error('Error updating product: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


module.exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await db.execute('DELETE FROM Product WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            logger.warn(`Product with ID: ${id} not found`);
            return res.status(404).json({ message: 'Product not found' });
        }
        logger.info(`Deleted product with ID: ${id}`);
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        logger.error('Error deleting product: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
