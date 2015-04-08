//require mongoose module
var mongoose = require("mongoose");
//require mongoose Schema creator
var Schema = mongoose.Schema;

//create subscription Schema
var subscriptionSchema = new Schema({
  post: {
    title: {type: String, required: true,default: "Not a Post Subscription"},
    comments: {type: Boolean, required: true, default: false},
    edits: {type: Boolean, required: true, default: false}
  },
  tag: {
    title: {type: String, required: true, default: "Not a Tag Subscription"},
    posts: {type: Boolean, required: true, default: false},
    comments: {type: Boolean, required: true, default: false}
  }
});

//export the subscription schema for use
module.exports = mongoose.model('Subscription', subscriptionSchema);