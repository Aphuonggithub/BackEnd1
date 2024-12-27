// Get the client
// const mysql = require('mysql2');
import mysql from "mysql2/promise";

// Create the connection to database
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "backend1",
});

// A simple SELECT query
// pool.query("SELECT * FROM `users` ", function (err, results, fields) {
  // console.log(">>> check mysql");
// 
  // console.log(results); // results contains rows returned by server
//  console.log(results[0]);
//  
// });

export default pool;


