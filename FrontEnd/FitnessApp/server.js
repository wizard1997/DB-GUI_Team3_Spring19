const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const mc = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'CSE3330Lab',
  database: 'DatabaseProject'
});

app.get('/posts', function (req, res) {
    mc.connect();

    mc.query('SELECT * FROM Users;', function (err, results, fields) {
      if (err) throw err;
      res.send(results)
    });

    mc.end();
});

app.listen(port, () => {
    console.log('Simple example');
});

app.use('/static', express.static('public'));

// app.get('/data', (req, res) => {
//   res.send(req.query);
// });

app.get('/', (req, res) => {
    console.log('Incoming request...');
    res.send('Hello World');
});

app.get('/user', (req, res) => {
    console.log('Incoming request...');
    res.send('Hello Users');
});

app.post('/user', (req, res) => {
    console.log("post request");
    res.send("Hello Post Req");
});

app.get('/user/:userid/range/:from-:to', (req, res) => {
    res.send('{"Name":"Harrison Noble", "ID":"12345"}');
    res.send(req.params);
});
