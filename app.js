//express app

var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/dist/views')
app.use(express.static(__dirname + '/dist/static'));
app.use(express.static(__dirname + '/dist'));

app.listen(3000, function() {
  console.log('listening on 3000:');
});

app.get('/', function(req, res) {
  res.render('home');
});

app.get('/about', function(req, res) {
  res.render('about');
});
