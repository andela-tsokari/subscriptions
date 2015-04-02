var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var subscriptionSchema = new Schema ({
                                        post: {
                                          title: String,
                                          comments: Boolean,
                                          edits: Boolean
                                        },

                                        tag: {
                                          title: String,
                                          posts: Boolean,
                                          comments: Boolean
                                        }
                                        
                                      });

module.exports = mongoose.model('Subscription', subscriptionSchema);