
var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var routers = require('./email');
var path = require("path");

var jsonParser  = bodyParser.json();
var urlencodedparser = bodyParser.urlencoded({extended:true});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
var port = process.env.PORT || 8080;

var http= require('http');
app.use('/api/email/',routers);


//app.use(urlencodedparser);

  // Serve any static filess
  app.use(express.static(path.join(__dirname, 'public/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/build', 'index.html'));
  });



var server = http.createServer(app);

server.listen(port);






