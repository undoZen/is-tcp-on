'use strict';
var tape = require('tape');
var net = require('net');

var isTcpOn = require('../');

tape('resolved successfully', function (test) {
    test.plan(1);
    var server = net.createServer(function (socket) {
        console.log(socket);
    });
    server.listen(0, function () {
        var port = server.address().port;
        var socket = new net.Socket();
        isTcpOn({ port: port, host: '127.0.0.1' })
            .then(function() {
                test.ok(true);
                server.close();
            })
            .catch(function() {
                test.ok(false); //never reach this line
            });
    });
});
