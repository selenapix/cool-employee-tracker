const mysql = require('mysql');
const consoleTable = require('console.table');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'postgres',
  password: '',
  database: 'employee_db'
});

// Connect to the database
connection.connect();

// Query to retrieve all departments
connection.query('SELECT * FROM departments', (error, departments) => {
  if (error) throw error;
  console.log('All Departments:');
  console.table(departments);
});

// Query to retrieve all roles
connection.query('SELECT * FROM roles', (error, roles) => {
  if (error) throw error;
  console.log('All Roles:');
  console.table(roles);
});

// Query to retrieve all employees
connection.query('SELECT * FROM employees', (error, employees) => {
  if (error) throw error;
  console.log('All Employees:');
  console.table(employees);
});

// Close the connection after querying
connection.end();