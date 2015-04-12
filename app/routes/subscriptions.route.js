//the functionality which the routes have is stored in the controller. thus, the first step is to require the controller.
var subscriptions = require('./../controllers/subscriptions.controller');

//we will export this router capability to the server.js location. so it can be used by the app
module.exports = function (router) {
  //route for all subscriptions. from here, we can create new posts and retrieve all old posts.
  router.route('/subscriptions')
    .get(subscriptions.getAllSubscriptions)
    .post(subscriptions.createSubscription);
  //route for post subscriptions. we only need the retrieve ability here.
  router.route('/subscriptions/posts')
    .get(subscriptions.getPostSubscriptions);
  //route for tag subscriptions. we only need the retrieve ability here.
  router.route('/subscriptions/tags')
    .get(subscriptions.getTagSubscriptions);
  //route for unique subscriptions. the colon( : ) before shows the item in that location is variable. unique subscriptions can be retrieved, deleted or have their status updated.
  router.route('/subscription/:_id')
    .delete(subscriptions.deleteOneSubscription)
    .put(subscriptions.updateOneSubscription)
    .get(subscriptions.getOneSubscription);
};
