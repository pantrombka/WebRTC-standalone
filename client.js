window = global
window.BlobBuilder = require("BlobBuilder")
location = {
    protocol: 'http'
}
var connected = 0
BinaryPack = require("binary-pack")
XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var wrtc = require('wrtc')


RTCPeerConnection = wrtc.RTCPeerConnection;
RTCSessionDescription = wrtc.RTCSessionDescription;
RTCIceCandidate = wrtc.RTCIceCandidate;

WebSocket = require('ws')
require('peerjs/lib/exports.js');


var peer = new Peer('PEER', {
    host: '127.0.0.1',
    port: 9000,
    path: '/myapp',
    debug: 3
});



peer.on('open', function(id) {
    console.log('My peer ID is: ' + id);
});
