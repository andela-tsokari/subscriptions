var config = require('./config/db-config');
var mongoose = require('mongoose');

var db = mongoose.connect(config.db[process.env.NODE_ENV].uri, config.db[process.env.NODE_ENV].options, function (err) {
    if (err) {
        console.error('Could not connect to MongoDB.');
        console.log(err);
    }
});

mongoose.connection.on('error', function (err) {
    console.error('MongoDB connection error: ' + err);
});

var app = require('./config/app-config')(db);

app.listen(config.port, function () {
    console.log('Subscriptions-API listening on Port: ' + config.port);
});