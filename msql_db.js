require('dotenv').config();

const mysql = require('mysql2');


const connection = mysql.createConnection(process.env.MYSQL_DATABASE);

connection.connect();

module.exports = connection;
