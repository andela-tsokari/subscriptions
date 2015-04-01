var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.send('OK...i woke up in heaven today');
});

app.listen(3000);