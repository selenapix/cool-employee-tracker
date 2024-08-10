INSERT INTO departments (department_name)
VALUES
('Engineering'),
('Finance'),
('Legal'),
('Sales');

INSERT INTO roles (title, salary, department_id)
VALUES
('Sales Lead', 100000, 1),
('Salesperson', 80000, 2),
('Lead Engineer', 150000, 3),
('Software Engineer', 120000, 4),
('Account Manager', 160000, 5),
('Accountant', 125000, 6),
('Legal Team Lead', 250000, 7),
('Lawyer', 190000, 8);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Selena', 'Pixton', 1, 1),
('Jonah', 'Pixton', 2, 2),
('Jana', 'Knobbe', 3, 3),
('Mark', 'Knobbe' 4, 4),
('Jenelle', 'Hull', 5, 5),
('Richard', 'Hull', 6, 6),
('David', 'Packard', 6, 6),
('Alyssa', 'Packard', 7, 7);

