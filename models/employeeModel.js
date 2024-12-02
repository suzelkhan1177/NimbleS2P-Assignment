const pool = require('../config/mysql');

async function createEmployeeTable() {
  try {
    const [rows] = await pool.query("SHOW TABLES LIKE 'Employee';");

    if (rows.length === 0) {
      const createTableQuery = `
    CREATE TABLE Employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL
   );`;

      await pool.query(createTableQuery);
      console.log('Employee table created successfully');
    } else {
      // console.log('Employee table already exists');
    }
  } catch (error) {
    console.error('Error creating User table: ' + error.message);
  }
}

createEmployeeTable();

