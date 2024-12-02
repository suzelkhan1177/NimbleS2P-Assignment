const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('./config/logger');
require("./config/mysql");
require("./models/index");
const employeeRouter = require('./routes/employeeRouter');
const productRouter = require('./routes/productRouter');
const setupSwagger = require('./config/swaggerConfig');

// Create an instance of express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/v1/employee', employeeRouter);
app.use('/api/v1/product', productRouter);

// Swagger Setup
setupSwagger(app);

// Root Route
app.get('/', (req, res) => {
    res.send('Welcome to the Employee and Product Management API!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
