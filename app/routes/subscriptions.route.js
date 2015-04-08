var subscriptions = require('./../controllers/subscriptions.controller');

module.exports = function (router) {
// body...
  router.route('/subscriptions')
    .get(subscriptions.getAllSubscriptions)
    .post(subscriptions.createSubscription
    );
};