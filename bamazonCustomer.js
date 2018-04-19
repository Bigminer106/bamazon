const inquirer = require('inquirer');
const mySQL = require('mysql');


const connection = mySQL.createConnection({
  host            : 'localhost',
  user            : 'root',
  password        : 'root',
  database        : 'bamazon'
});

connection.connect();

connection.query('DROP DATABASE IF EXISTS bamazon');

connection.query('CREATE DATABASE IF NOT EXISTS bamazon');

connection.query('USE bamazon');

connection.query("CREATE TABLE products (item_id INT(11) AUTO_INCREMENT NOT NULL, product_name VARCHAR(30) NOT NULL, department_name VARCHAR(30) NOT NULL, price INT(10) NOT NULL, stock_quantity INT(10) NOT NULL, PRIMARY KEY (item_id))");

connection.query(
  'INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES("Frisbee", "Toys", 5, 8)', function(err, results, fields) {
    if (err) throw err;
  });

connection.query(
  'INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES("Hot Wheels", "Toys", 4, 5)', function(err, results, fields) {
    if (err) throw err;
  });

connection.query(
  'INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES("Hibiscus", "Garden", 10, 2)', function(err, results, fields) {
    if (err) throw err;
  });

connection.query(
  'INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES("Grill Set", "Home", 7, 5)', function(err, results, fields) {
    if (err) throw err;
  });

connection.query(
  'INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES("Deck Chairs", "Home", 3, 10)', function(err, results, fields) {
    if (err) throw err;
  });

connection.query(
  'INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES("Beanie Babies", "Toys", 2, 10)', function(err, results, fields) {
    if (err) throw err;
  });

connection.query(
  'INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES("Garden Hose", "Garden", 8, 3)', function(err, results, fields) {
    if (err) throw err;
  });

connection.query(
  'INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES("Magic 8 Ball", "Toys", 4, 0)', function(err, results, fields) {
    if (err) throw err;
  });

connection.query(
  'INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES("Xbox One X", "Video Games", 10, 1)', function(err, results, fields) {
    if (err) throw err;
  });

connection.query(
  'INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES("PlayStation 4", "Video Games", 10, 0)', function(err, results, fields) {
    if (err) throw err;
  });

connection.query('SELECT * FROM products', function(err, results, fields) {
  if (err) throw err;
  console.log(results);
});

connection.end();