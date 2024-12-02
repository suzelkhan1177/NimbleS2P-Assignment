const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Employee and Product API",
            version: "1.0.0",
            description: "API documentation for managing Employees and Products",
        },
        servers: [
            { url: "http://localhost:5000/api/v1/" }
        ],
    },
    apis: ["./routes/*.js"], 
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

const setupSwagger = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;
