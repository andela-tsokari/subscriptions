var SubscriptionModel = require('./../models/subscription.model');

module.exports = {
  getAllSubscriptions: function(request, response){
    SubscriptionModel.find(function(error, subscriptions){
      if (error) {
        response.json(error);
      }
      else {
        response.json(subscriptions);
      }
    });
  },

  createSubscription: function(request, response) {
    var subscription = new SubscriptionModel(request.body);
    subscription.save(function(error){
      if (error) {
        response.json(error);
      }
      else {
        response.json({message: 'New Subscription Added'});
      }
    });

  }
};