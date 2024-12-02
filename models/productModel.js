const pool = require('../config/mysql'); 

async function createProductTable() {
  try {
   
    const [rows] = await pool.query("SHOW TABLES LIKE 'Product';");

    if (rows.length === 0) {

      const createTableQuery = `
        CREATE TABLE Product (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          price DECIMAL(10, 2) NOT NULL,
          quantity INT NOT NULL,
          description TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        );
      `;

      await pool.query(createTableQuery);
      console.log('Product table created successfully');
    } else {
      // console.log('Product table already exists');
    }
  } catch (error) {
    console.error('Error creating Product table: ' + error.message);
  }
}

createProductTable();
