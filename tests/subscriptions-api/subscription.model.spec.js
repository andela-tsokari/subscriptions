var app = require('./../../server.js');
var SubscriptionModel = require('./../../app/models/subscription.model');
var subscription;
var id;
var deleteID;
var updateID;
var edit;

describe('SubscriptionModel Unit Test:', function () {
  // body...
  beforeEach(function (done) {
    // body...
    subscription = new SubscriptionModel({
      post: {
        title: "trial post"
      }
    });
    id = '552869c248fe746b69d9237a';
    updateID = '55286a42362a62716912e397';
    edit = {
      post: {
        title: 'how about a change',
        comments: true,
        edits: false
      }
    };
    deleteID = '55286bc188d99d9469149bae';
    done();
  });
  describe('Save Subscription - ', function () {
    // body...
    
    it('should save without problems', function (done) {
      // body...
      subscription.save(function(error){
        expect(error).toBeNull();
        done();
      });

    });

  });

  describe('Get Subscriptions - ', function () {
    // body...

    it('should get all Subscriptions', function (done) {
      // body...
      SubscriptionModel.find(function (error, Subscriptions) {
        // body...
        expect(error).toBeNull();
        expect(Subscriptions).toBeTruthy();
        done();
      });
    });
  });

  describe('Get One Subscription - ', function () {
    // body...

    it('should get one subscription', function (done) {
      // body...
      SubscriptionModel.findById(id, function (error, subscriptions) {
        // body...
        expect(error).toBeNull();
        expect(subscriptions).toBeTruthy();
        done();
      });
    });
  });

  describe('Edit One Subscription - ', function () {
    // body...

    it('should get one subscription and edit content', function (done) {
      // body...
      SubscriptionModel.findByIdAndUpdate(updateID, edit, function (error, subscriptions) {
        // body...
        expect(error).toBeNull();
        expect(subscriptions).toBeTruthy();
        done();
      });
    });
  });

  describe('Delete One Subscription - ', function () {
    // body...

    it('should get one subscription and delete it', function (done) {
      // body...
      SubscriptionModel.findByIdAndRemove(deleteID, function (error, subscription) {
        // body...
        expect(error).toBeNull();
        expect(subscriptions).not.toBeTruthy();
        done();
      });
    });
  });

});