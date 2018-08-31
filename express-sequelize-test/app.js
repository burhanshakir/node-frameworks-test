var express = require('express');
var app = express();
const controller = require('./controllers/controller')


app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.get('/countries', function (req, res){

});


app.listen(9000, function () {
  console.log('Magic happens on port 9000');
});
