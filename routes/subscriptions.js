var Subscription = require('../models/subscription');

var express = require('express');

var router = express.Router();

router.route('/subscriptions')
  .get(function(request, response){
    Subscription.find(function(err, subscriptions){
      if (err) {
        return response.send('Unable to get subscriptions.');
      }
      response.json(subscriptions);
    });
  })
  .post(function (request, response){
    var Subscription = new Subscription(request.body);
    subscription.save(function(err){
      if (err) {
        response.send(err);
      }
      response.send({message: 'New Subscription Added'});
    });
  });

router.route('/subscriptions/:id')
  .put(function(request, response){
    Subscription.findOne({_id: request.params.id}, function(err, subscription){
      if (err) {
        return response.send(err);
      }
      //from here, you can specify file to delete or not.
      response.json({message: 'subscription updated'});
    });
  })
  .delete(function(request, response){
    Subscription.remove({_id: request.params.id}, function(err, subscription){
      if (err) {
        return response.send(err);
      }
      response.json({message: 'subscription deleted'});
    });
  });