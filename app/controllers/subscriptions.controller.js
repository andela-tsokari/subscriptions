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

  },

  getOneSubscription: function(request, response){
    var id = request.params._id;
    SubscriptionModel.findById(id, function(error, subscriptions){
      if (error) {
        response.json(error);
      }
      else {
        response.json(subscriptions);
      }
    });
  },

  deleteOneSubscription: function(request, response){
    var id = request.params._id;
    SubscriptionModel.findByIdAndRemove(id, function(error, subscriptions){
      if (error) {
        response.json(error);
      }
      else {
        response.json({message: "your subscription was deleted."});
      }
    });
  },

  updateOneSubscription: function(request, response){
    //split up required parts of the request body.
    var id = request.params._id;
    var edit = request.body;
    SubscriptionModel.findByIdAndUpdate(id, edit, function(error, subscriptions){
      if (error) {
        response.json(error);
      }
      else {
        response.json({message: "your subscription was successfully updated"});
      }
    });
  },

  getPostSubscriptions: function(request, response){
    var id = request.params.posts;
    SubscriptionModel.find(id, function(error, subscriptions){
      if (error) {
        response.json(error);
      }
      else {
        response.json(subscriptions);
      }
    });
  },

  getTagSubscriptions: function(request, response){
    var id = request.params.tags;
    SubscriptionModel.find(id, function(error, subscriptions){
      if (error) {
        response.json(error);
      }
      else {
        response.json(subscriptions);
      }
    });
  }

};