let express = require('express');
let app = express();

let repository = require('./db/repository');

app.use(express.static('public'));

app.use('/word', require('./controller'));

module.exports = app;