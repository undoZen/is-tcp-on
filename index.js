'use strict';
var Promise = require('./native-promise-or-polyfill');
var destroy = require('destroy');
var Socket = require('net').Socket;
module.exports = function (opts) {
    return new Promise(function(resolve, reject) {
        var socket = new Socket;
        socket.on('error', function (err) {
            reject(err);
            destroy(socket);
        });
        socket.setTimeout(opts.timeout || 1000, function() {
            reject(new Error('ETIMEOUT'));
            destroy(socket);
        });
        socket.connect(opts.port, opts.host, function () {
            resolve(true);
            destroy(socket);
        });
    });
};
