
# NimbleS2P Assignment
This project demonstrates CRUD operations for Employee and Product entities using Node.js and MySQL. It also integrates Swagger for API documentation.


## API Documentation

The Swagger UI for API documentation is available at:  [http://localhost:5000/api-docs/](http://localhost:5000/api-docs/)

# API Endpoints

## Employee APIs

| Method    | Endpoint                           | Description                                    |
| :-------- |:-----------------------------------|:-----------------------------------------------|
| `POST`    | `/api/v1/employees`                | Add a new employee                             | 
| `GET`     | `/api/v1/employees`                | Retrieve all employees                         |
| `GET`     | `/api/v1/employees/:name`          | Retrieve employee by name                      |
| `DELETE`  | `/api/v1/employees/:id`            | Delete an employee by ID                       |
| `GET`     | `/api/v1/employees/highest-salary` | Retrieve the employee with the highest salary  |


## Product APIs

| Method  | Endpoint               | Description                |
|:--------|:-----------------------|:-------------------------- |
| `POST`  | `/api/v1/products`     | Add a new product          | 
| `GET`   | `/api/v1/products`     | Retrieve all products      |
| `GET`   | `/api/v1/products/:id` | Retrieve a product by ID   |
| `PUT`   | `/api/v1/products/:id` | Update a product by ID     |
| `DELETE`| `/api/v1/products/:id` | Delete a product by ID     |

# Swagger Integration
Swagger has been integrated for detailed API documentation.
- The Swagger UI for API documentation is available at:  [http://localhost:5000/api-docs/](http://localhost:5000/api-docs/)

- To view or test API endpoints, open the above URL in your browser.

## Swagger Configuration
Swagger is configured in the `index.js` file using the following libraries:

- `swagger-ui-express`
- `swagger-jsdoc`


# Database Schema


## Employee Table

| Column  | Type             | Constraints                 |
| :-------|:-----------------|:----------------------------|
| `id`    | `INT`            | Primary Key, Auto Increment | 
| `name`  | `VARCHAR(255)`   | NOT NULL                    |
| `salary`| `DECIMAL(10, 2)` | NOT NULL                    |


## Employee APIs


| Column       | Type             | Constraints                                           |
| :------------|:-----------------|:------------------------------------------------------|
| `id`         | `INT`            | Primary Key, Auto Increment                           | 
| `name`       | `VARCHAR(255)`   | NOT NULL                                              |
| `price`      | `DECIMAL(10, 2)` | NOT NULL                                              |
| `quantity`   | `INT`            | NOT NULL                                              |
| `description`| `TEXT`           |                                                       |
| `created_at` | `TIMESTAMP`      | Default: CURRENT_TIMESTAMP                            |
| `updated_at` | `TIMESTAMP`      | Default: CURRENT_TIMESTAMP on UPDATE CURRENT_TIMESTAMP|



