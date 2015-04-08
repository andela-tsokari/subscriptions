var express = require('express');
var subscriptions = require('../controllers/subscription.controller');
var router = express.Router();

router.route('/subscriptions')
  .get(subscriptions.getAllSubscriptions)
  .post(subscriptions.createSubscription
  );