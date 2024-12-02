const db = require('../config/mysql');
const logger = require('../config/logger');

module.exports.addEmployee = async (req, res) => {
    try {
        const { name, salary } = req.body;
        if (!name || !salary) {
            logger.warn("Name and Salary are required for adding an employee.");
            return res.status(400).json({ message: "Name and Salary are required." });
        }

        const [result] = await db.execute(
            'INSERT INTO Employee (name, salary) VALUES (?, ?)',
            [name, salary]
        );

        logger.info(`Employee added successfully with ID: ${result.insertId}`);
        res.status(201).json({ message: "Employee added successfully!", employeeId: result.insertId });
    } catch (error) {
        logger.error(`Error adding employee: ${error.message}`);
        res.status(500).json({ error: error.message });
    }
};

module.exports.deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await db.execute('DELETE FROM Employee WHERE id = ?', [id]);

        if (result.affectedRows === 0) {
            logger.warn(`Employee with ID ${id} not found for deletion.`);
            return res.status(404).json({ message: "Employee not found." });
        }

        logger.info(`Employee with ID ${id} deleted successfully.`);
        res.status(200).json({ message: "Employee deleted successfully." });
    } catch (error) {
        logger.error(`Error deleting employee: ${error.message}`);
        res.status(500).json({ error: error.message });
    }
};


module.exports.getEmployeeByName = async (req, res) => {
    try {
        const { name } = req.query;
        const [employees] = await db.execute('SELECT * FROM Employee WHERE name LIKE ?', [`%${name}%`]);

        logger.info(`Retrieved ${employees.length} employees matching the name: ${name}`);
        res.status(200).json({ employees });
    } catch (error) {
        logger.error(`Error retrieving employees by name: ${error.message}`);
        res.status(500).json({ error: error.message });
    }
};


module.exports.getHighestSalaryEmployee = async (req, res) => {
    try {
        const [result] = await db.execute('SELECT * FROM Employee ORDER BY salary DESC LIMIT 1');

        if (result.length === 0) {
            logger.warn("No employees found when fetching the highest salary.");
            return res.status(404).json({ message: "No employees found." });
        }

        logger.info(`Retrieved employee with the highest salary: ${JSON.stringify(result[0])}`);
        res.status(200).json({ employee: result[0] });
    } catch (error) {
        logger.error(`Error fetching employee with the highest salary: ${error.message}`);
        res.status(500).json({ error: error.message });
    }
};
