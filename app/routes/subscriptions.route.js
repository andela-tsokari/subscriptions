var subscriptions = require('./../controllers/subscriptions.controller');

module.exports = function (router) {
// body...
  router.route('/subscriptions')
    .get(subscriptions.getAllSubscriptions)
    .post(subscriptions.createSubscription);
  router.route('/subscriptions/posts')
    .get(subscriptions.getPostSubscriptions);
  router.route('/subscriptions/tags')
    .get(subscriptions.getTagSubscriptions);
  router.route('/subscription/:_id')
    .delete(subscriptions.deleteOneSubscription)
    .put(subscriptions.updateOneSubscription)
    .get(subscriptions.getOneSubscription);
};
