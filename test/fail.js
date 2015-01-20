'use strict';
var tape = require('tape');
var net = require('net');

var isTcpOn = require('../');

tape('fail on random port', function (test) {
    var port;
    test.plan(1);
    var server = net.createServer(function (socket) {
        console.log(socket);
    });
    server.listen(0, function () {
        port = server.address().port;
        server.close(gotAvailablePort);
    });
    function gotAvailablePort() {
        console.log('available tcp port:', port);
        var socket = new net.Socket();
        isTcpOn({ port: port, host: '127.0.0.1' })
            .then(function() {
                test.ok(false); //never reach this line
            })
            .catch(function() {
                test.ok(true);
            });
    }
});
