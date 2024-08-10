const inquirer = require('inquirer');
const consoleTable = require('console.table');

const departments = ['Engineering', 'Finance', 'Legal', 'Sales'];
const roles = ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer'];
const employees = ['Selena', 'Jonah', 'Jana', 'Mark', 'Jenelle', 'Richard', 'David', 'Alyssa'];

// Function to view all departments
function viewAllDepartments() {
  console.log('All Departments:');
  console.table(departments.map((department, index) => ({ id: index + 1, name: department })));
}

// Function to view all roles
function viewAllRoles() {
  console.log('All Roles:');
  console.table(roles.map((role, index) => ({ id: index + 1, title: role, department: departments[Math.floor(Math.random() * departments.length)], salary: Math.floor(Math.random() * 100000) })));
}

// Function to view all employees
function viewAllEmployees() {
  console.log('All Employees:');
  console.table(employees.map((employee, index) => ({
    id: index + 1,
    firstName: employee,
    lastName: '',
    jobTitle: roles[Math.floor(Math.random() * roles.length)],
    department: departments[Math.floor(Math.random() * departments.length)],
    salary: Math.floor(Math.random() * 100000),
    manager: employees[Math.floor(Math.random() * employees.length)]
  })));
}

// Function to add a department
function addDepartment() {
  inquirer.prompt({
    type: 'input',
    name: 'newDepartment',
    message: 'Enter the name of the new department:'
  }).then((answer) => {
    departments.push(answer.newDepartment);
    console.log(`New department "${answer.newDepartment}" added successfully.`);
  });
}

// Function to add a role
function addRole() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'newRole',
      message: 'Enter the name of the new role:'
    },
    {
      type: 'input',
      name: 'salary',
      message: 'Enter the salary for the new role:'
    },
    {
      type: 'list',
      name: 'department',
      message: 'Select the department for the new role:',
      choices: departments
    }
  ]).then((answers) => {
    roles.push(answers.newRole);
    console.log(`New role "${answers.newRole}" added successfully to the ${answers.department} department with a salary of $${answers.salary}.`);
  });
}

// Function to add an employee
function addEmployee() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'firstName',
      message: 'Enter the first name of the new employee:'
    },
    {
      type: 'input',
      name: 'lastName',
      message: 'Enter the last name of the new employee:'
    },
    {
      type: 'list',
      name: 'role',
      message: 'Select the role for the new employee:',
      choices: roles
    },
    {
      type: 'list',
      name: 'manager',
      message: 'Select the manager for the new employee:',
      choices: employees
    }
  ]).then((answers) => {
    employees.push(`${answers.firstName} ${answers.lastName}`);
    console.log(`New employee "${answers.firstName} ${answers.lastName}" added successfully with role "${answers.role}" and manager "${answers.manager}".`);
  });
}

// Function to update an employee's role
function updateEmployeeRole() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'employeeName',
      message: 'Enter the name of the employee whose role you want to update:'
    },
    {
      type: 'list',
      name: 'newRole',
      message: 'Select the new role for the employee:',
      choices: roles
    }
  ]).then((answers) => {
    const employeeName = answers.employeeName;
    const newRole = answers.newRole;

    const query = `UPDATE employee SET role = '${newRole}' WHERE name = '${employeeName}'`;

    // Execute the query
    client.query(query, (error, result) => {
      if (error) {
        console.error('Error updating employee role:', error);
      } else {
        console.log(`Employee '${employeeName}' role updated to '${newRole}' successfully.`);
      }
    });
  });
}


// Prompting the user with the option to select an action
inquirer
  .prompt([
    {
      type: 'list',
      name: 'action',
      message: 'Select an action:',
      choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
    },
  ])
  .then((answers) => {
    const selectedAction = answers.action;

    // Call the corresponding function based on the selected action
    switch (selectedAction) {
      case 'View all departments':
        viewAllDepartments();
        break;
      case 'View all roles':
        viewAllRoles();
        break;
      case 'View all employees':
        viewAllEmployees();
        break;
      case 'Add a department':
        addDepartment();
        break;
      case 'Add a role':
        addRole();
        break;
      case 'Add an employee':
        addEmployee();
        break;
      case 'Update an employee role':
        updateEmployeeRole();
        break;
      default:
        console.log('Invalid action selected');
    }
  })
  .catch((error) => {
    console.error(error);
  });