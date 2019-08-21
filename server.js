var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var index_router = require('./app/api/routes/index.js');
var user_router = require('./app/api/routes/user.js');

app.use('/api', index_router);
app.use('/api', user_router);

app.listen(port);

