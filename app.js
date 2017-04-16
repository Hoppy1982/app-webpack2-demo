var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views')
app.use(express.static(__dirname + '/dist'));

app.get('/', function(req, res) {
  res.render('home');
});

app.get('/about', function(req, res) {
  res.render('about');
});

app.listen(3000, function() {
  console.log('listening on 3000:');
});
