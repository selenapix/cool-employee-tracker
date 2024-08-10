DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

-- Create the department table
CREATE TABLE IF NOT EXISTS department (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) UNIQUE NOT NULL
);

-- Create the role table
CREATE TABLE IF NOT EXISTS role (
  id SERIAL PRIMARY KEY,
  title VARCHAR(30) UNIQUE NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INTEGER NOT NULL,
  FOREIGN KEY (department_id) REFERENCES department(id)
);

-- Create the employee table
CREATE TABLE IF NOT EXISTS employee (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER NOT NULL,
  manager_id INTEGER NOT NULL,
  FOREIGN KEY (role_id) REFERENCES role(id),
  FOREIGN KEY (manager_id) REFERENCES employee(id)
);