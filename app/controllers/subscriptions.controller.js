//require the schema that was exported via the model. its methods are to be used here
var SubscriptionModel = require('./../models/subscription.model');

//all methods created here, are to be sent to the routes. export them as a module
module.exports = {
  //method to retrieve all subscriptions, 
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
  //method to create a new subscription
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
  //method to get one subscription.
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
    //to update a subscription, we need to use the findByIdAndUpdate method. This will first find the unique subscription, then insert the required edit. The edit will be the request body.
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
  //method to get all post subscriptions
  getPostSubscriptions: function(request, response){
    //post subscriptions can be gotten by excluding the subscriptions with default post values. to do this, we use the mongoDB query method '$ne' to exclude all default post values. then we return all posts stored.
    var posts = {"post": { 
                            $ne: {
                            //the sequence in which the fields are entered should follow the sequence, the database saves the fields as. 
                                    "edits": false, 
                                    "comments": false, 
                                    "title": "Not a Post Subscription" 
                                  } 
                          } 
                };
    SubscriptionModel.find(posts, function(error, posts){
      if (error) {
        response.json(error);
      }
      else {
        response.json(posts);
      }
    });
  },

  //method to get all tag subscriptions
  getTagSubscriptions: function(request, response){
    //tag subscriptions can be gotten by excluding the subscriptions with default tag values. to do this, we use the mongoDB query method '$ne' to exclude all default tag values. then we return all tags stored.
    var tags = {"tag": { 
                          $ne: { 
                            //the sequence in which the fields are entered should follow the sequence, the database saves the fields as. 
                                  "comments": false, 
                                  "posts": false, 
                                  "title": "Not a Tag Subscription" 
                                } 
                        } 
                };
    SubscriptionModel.find(tags, function(error, tags){
      if (error) {
        response.json(error);
      }
      else {
        response.json(tags);
      }
    });
  }

};