'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'database_lab_mysql_comp',
  user: 'admin',
  password: 'CSE3330Lab',
  database: 'DatabaseProject'
});

connection.connect(function(err) {
  if (err) {
    throw err;
  }
});

module.exports = connection;
