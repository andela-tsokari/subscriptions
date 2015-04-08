var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./../app/routes/subscriptions.route');
var app = express();
var router = express.Router();
app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended : true}))
  .use('/', router);
routes(router);

module.exports = app;
