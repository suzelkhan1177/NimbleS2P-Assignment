const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

/**
 * @swagger
 * /employee/add:
 *   post:
 *     summary: Add a new employee
 *     description: Adds a new employee to the database with a name and salary.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               salary:
 *                 type: number
 *                 example: 50000
 *     responses:
 *       201:
 *         description: Employee added successfully.
 *       400:
 *         description: Missing required fields (name or salary).
 *       500:
 *         description: Internal server error.
 */
router.post('/add', employeeController.addEmployee);

/**
 * @swagger
 * /employee/delete/{id}:
 *   delete:
 *     summary: Delete an employee by ID
 *     description: Deletes an employee from the database based on the provided ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Employee deleted successfully.
 *       404:
 *         description: Employee not found.
 *       500:
 *         description: Internal server error.
 */
router.delete('/delete/:id', employeeController.deleteEmployee);

/**
 * @swagger
 * /employee/getByName:
 *   get:
 *     summary: Get employees by name
 *     description: Retrieves employees whose names match the provided query parameter.
 *     parameters:
 *       - in: query
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *           example: John
 *     responses:
 *       200:
 *         description: List of employees matching the query.
 *       500:
 *         description: Internal server error.
 */
router.get('/getByName', employeeController.getEmployeeByName);

/**
 * @swagger
 * /employee/highestSalary:
 *   get:
 *     summary: Get employee with the highest salary
 *     description: Retrieves the employee with the highest salary in the database.
 *     responses:
 *       200:
 *         description: Employee details.
 *       404:
 *         description: No employees found.
 *       500:
 *         description: Internal server error.
 */
router.get('/highestSalary', employeeController.getHighestSalaryEmployee);

module.exports = router;
