let express = require('express');
let app = express();

app.use(express.static('public'));

app.use('/word', require('./controller'));

module.exports = app;