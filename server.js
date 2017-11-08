const express = require('express'),
    enrouten = require('express-enrouten'),
    path = require('path'),
    bodyParser = require('body-parser');

var app = express();
var port = 8081;

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'server', 'views'));

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.static(path.resolve(__dirname, 'server')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(enrouten({directory: 'controllers'}));

app.listen(port);
