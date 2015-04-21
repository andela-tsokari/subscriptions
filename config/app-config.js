var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var routes = require('./../app/routes/subscriptions.route');

var corsOption = {
  origin: 'http://user-subs.herokuapp.com'
};

module.exports = function() {
  var app = express();
  var router = express.Router();
  app
    .use(bodyParser.json())
    .use(cors(corsOption))
    .use(bodyParser.urlencoded({extended : true}))
    .use('/api/v1', router);

  routes(router);

  return app; 
};