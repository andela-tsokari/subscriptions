module.exports = (function () {
  'use strict';
  return {
    db: {
      development: {
        uri: 'mongodb://localhost/subscriptions'
      },
      test: {
        uri: 'mongodb://localhost/subscriptions-test'
      },
      staging: {
        uri: process.env.MONGOLAB_URI
      },
      production: {
        uri: process.env.MONGOLAB_URI
      }
    },

    port: process.env.PORT || 4000
  };
})();