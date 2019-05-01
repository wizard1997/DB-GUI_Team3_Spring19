'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
  host: '18.188.218.182',
  user: 'admin',
  password: 'CSE3330Lab',
  database: 'DatabaseProject',
  port: '3306'
});

connection.connect(function(err) {
  if (err) {
    throw err;
  }
});

module.exports = connection;
