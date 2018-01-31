var PeerServer = require('peer').PeerServer;
var server = PeerServer({port: 9000, path: '/myapp',  allow_discovery: true
});
server.on('connection',function(id){
console.log('new  connection with id ' +id);
});

server.on('disconnect',function(id){
console.log('disconnect with id '+id);
});

