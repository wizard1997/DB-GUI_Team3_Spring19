const express = require('express');
const bodyParse = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;
const host = '0.0.0.0'

app.listen(port, host);
console.log('API started on: ' + port);

app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());

var routes = require('./API/Routing/routes');
routes(app);
