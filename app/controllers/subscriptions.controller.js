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
  
  //method to get one subscription, regardless of user.
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

  //method to get all POST subscriptions
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

  //method to get all TAG subscriptions
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

  },

  //get ALL subscriptions from a particular user  
  getUserSubscriptions: function(request, response) {
    var username = request.params.username;

    var findParam = {author: username};

    var restrictParam = {__v: 0};

    SubscriptionModel
      .find(findParam, restrictParam, function(error, subscriptions) {
        if (error) {
          response
            .json(error);
        }
        response
          .json(subscriptions);
      });

  },

  //get all POST subscriptions from a particular user
  getUserPostSubscriptions: function(request, response) {
    var username = request.params.username;

    var postsParam = { 
                        $ne: {
                        //the sequence in which the fields are entered should follow the sequence, the database saves the fields as. 
                                "edits": false, 
                                "comments": false, 
                                "title": "Not a Post Subscription" 
                              } 
                      };

    var findParam = {
                      author: username,
                      post: postsParam
                    };

    var restrictParam = {
                          // _id: 0,
                          __v: 0,
                          tag: 0
                        };

    SubscriptionModel.find(findParam, restrictParam, function(error, subscriptions) {
      if(error) {
        response
          .error({
            error: error.message
          });
      }
      response
        .status(200)
        .json(subscriptions);
    });

  },

  //get all TAG subscriptions from a particular user
  getUserTagSubscriptions: function(request, response) {

    var username = request.params.username;

    var tagsParam = { 
                      $ne: { 
                        //the sequence in which the fields are entered should follow the sequence, the database saves the fields as. 
                              "comments": false, 
                              "posts": false, 
                              "title": "Not a Tag Subscription" 
                            } 
                    };

    var findParam = {
                      author : username,
                      tag : tagsParam
                    };

    var restrictParam = {
                          // _id: 0,
                          __v: 0,
                          post: 0
                        };

    SubscriptionModel.find(findParam, restrictParam, function(error, subscriptions) {
      if(error){
        response
          .error({
            error: error.message
          });
      }
      response
        .status(200)
        .json(
          subscriptions
        );

    });                        

  },

  //method to create a new subscription
  createUserSubscription: function(request, response) {
    request.body.author = request.params.username;
    var subscription = new SubscriptionModel(request.body);
    subscription.save(function(error, savedSub){
      if (error) {
        response
          .error({
            error: error.message
          });
      }
      response
        .status(200)
        .json({
          message: 'New Subscription Saved',
          data: savedSub
        });
    });

  },

  //get a SINGLE user subscription
  getUserSubscription: function(request, response) {    var username = request.params.username;

    var id = request.params._id;

    var findParam = {
                      author: username,
                      _id: id
                    };

    SubscriptionModel.find(findParam, {__v: 0}, function(error, tags) {
      if (error) {
        response
          .json(error);
      }
      response
        .json(tags);
    });
  
  },

  editUserSubscription: function(request, response) {
    var username = request.params.username;

    var id = request.params._id;

    var edit = request.body;
    
    SubscriptionModel.findByIdAndUpdate(id, edit, function(error) {
      if(error){
        response
          .error({
            error: error.message
          });
      }
      response
        .json({
          message: 'Your subscription with Id: ' + id + ' has been updated'
        });
    });

  },

  deleteUserSubscription: function(request, response) {
    var username = request.params.username;

    var id = request.params._id;

    SubscriptionModel.findByIdAndRemove(id, function(error) {
      if(error){
        response
          .error({
            error: error.message
          });
      }
      response
        .json({
          message: 'Your subscription with Id: ' + id + ' has been deleted'
        });
    });

  }

};
