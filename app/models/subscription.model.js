//require mongoose module
var mongoose = require('mongoose');
//require mongoose Schema creator
var Schema = mongoose.Schema;

//create subscription Schema
var subscriptionSchema = new Schema({
  post: {
    title: {type: String, required: true, unique: true},
    comments: {type: Boolean, required: true, default: true},
    edits: {type: Boolean, required: true, default: false}
  },
  tag: {
    title: {type: String, required: true, unique: true},
    posts: {type: Boolean, required: true, default: true},
    comments: {type: Boolean, required: true, default: false}
  }
});

//export the subscription schema for use
module.exports = mongoose.model('Subscription', subscriptionSchema);