# is-tcp-on
check whether a tcp server could be connected

## installation

```bash
npm i is-tcp-on
```

## usage

```javascript
var isTcpOn = require('is-tcp-on');
isTcpOn({
    port: 80,
    host: '127.0.0.1',
    timeout: 1000 // optional, default is 1000ms
})
.then(function () {
    // tcp server exists
}, function () {
    // can not connect to this tcp server
});
```
