// express start a web server and listen on a port
var express = require('express')
var app = express()
var router = express.Router()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(4000, function () {
  console.log('Example app listening on port 3000!')
})
// express define router and add various routes with console logs
app.get('/admin', function(req, res){
  res.send('hello world in app.get');
});

router.param('id', function (req, res, next, id) {
  console.log('in param CALLED ONLY ONCE');
  next();
});
app.get('/', function(req, res){
  res.send('hello world');
});

app.get('/user/:id', function (req, res, next) {
  console.log('although this matches');
  next();
});

app.get('/user/:id', function (req, res) {
  console.log('and this matches too');
  res.end();
});