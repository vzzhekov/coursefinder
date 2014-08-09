/**
 * Created by vzhekov on 8/8/2014.
 */
var express = require('express');
var path = require('path');
var app = express();
var stylus = require('stylus');

app.configure(function() {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(stylus.middleware(__dirname + '/styles'));
    app.use(express.bodyParser({keepExtensions: true, uploadDir: path.join(__dirname, '/cvs')}));

});

app.get('/', function(req,res) {
    res.render('index', {title: 'Home Page'});

});

var portnumber = 3000;
app.listen(portnumber);
console.log('Port number is: ' + portnumber);