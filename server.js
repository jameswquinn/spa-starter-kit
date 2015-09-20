// Load dependencies
var express = require('express');
// Create the express app
var app = express();

// Create static directories
app.use(express.static(__dirname + '/public'));
app.use('/dist', express.static(__dirname + '/dist'));

// Set the port
var port = process.env.PORT || 4000

// Listen to the port
var server = app.listen(port, function(err, result) {
    if (err) {
        console.log(err);
    }
  console.log('Running on port %s', port);
});
