var carcass = require('carcass');

// .
var server = new carcass.servers.Http();

// .
server.start(function() {
    console.log('Express server listening on port 3000.');
});
