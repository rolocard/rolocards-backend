var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var routes = require('./app/api/routes');

app.use('/api', routes);
app.listen(port);

console.log('todo list restful api server started on: ' + port);
