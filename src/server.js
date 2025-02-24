require('dotenv').config() 
const express = require('express') // commonjs
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const mysql = require('mysql2');

// console.log(">>> check env: ", process.env);

const app = express() // app express
const port = process.env.PORT || 8888// port 
const hostname = process.env.HOST_NAME // hostname

// config template engine
configViewEngine(app);

// khai báo route 
app.use('/', webRoutes);

// test connection
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307, // default 3306
  user: 'root',
  password: '123456', // default empty
  database: 'hoidanit'
});

// simple query
connection.query(
  'SELECT * FROM Users u',
  function(err, results, fields) { 
    console.log(">>>results= ",results); // results contains rows returened by server
    console.log(">>>fields= ",fields); // fields contains extra meta data about reusults 
  }
)

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})