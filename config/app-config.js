var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./../app/routes/subscriptions.route');

module.exports = function() {
  var app = express();
  var router = express.Router();
  app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended : true}))
    .use('/api/v1', router);

  routes(router);

  return app; 
};