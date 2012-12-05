// .
var Server = require('carcass').load('servers', 'http');
var server = new Server();
server.start(function() {
    console.log('Express server listening on port 3000.');
});
