const inquirer = require('inquirer');
const mysql = require('mysql');


const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'bamazon_db'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  };
  console.log('Connected as ID ' + connection.threadID);
  // selectAll();
  start();
});

// const selectAll = () => {
//   connection.query('SELECT * FROM products', (err, res) => {
//     if (err) {
//       console.log(err);
//     };
//     console.log(res);
//   })
// }

const start = () => {
  connection.query('SELECT * FROM products', (err, res) => {
    if (err) {
      console.log(err);
    };
    console.log(res);
    inquirer.prompt(
      [
        {
          type: 'rawlist',
          name: 'item',
          message: 'Which item would you like to order?',
          choices: function() {
            var choicesArray = [];
            for (let i = 0; i < res.length; i++) {
              choicesArray.push(res[i].product_name);
              console.log(i);
            }
            return choicesArray;
          }
        }
      ]
    )
    .then(answer => {
      for (let i = 0; i < res.length; i++) {
        if (res[i].product_name === answer.item) {
          if (res[i].stock_quantity >= 1) {
            connection.query(
              'UPDATE products SET ? WHERE ?',
              [
                {
                  stock_quantity: res[i].stock_quantity - 1
                },
                {
                  product_name: answer.item
                }
              ]
            )
            console.log('Item Added');
            start();
          } else {
            console.log('Insufficient Stock!');
            start();
          }
        }
      }
    })
  });
};