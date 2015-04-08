var subscriptions = require('./../controllers/subscription.controller');

module.exports = function (router) {
// body...
  router.route('/subscriptions')
    .get(subscriptions.getAllSubscriptions)
    .post(subscriptions.createSubscription
    );
};