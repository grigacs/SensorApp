/**
 * Created by griga on 2016-09-12.
 */

var io = require('socket.io'),
    express = require('express');
var app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

server.listen(3000, "192.168.0.21");

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static('public'));


io.on('connection', function (socket) {
    socket.on('message', function (msg) {
        io.sockets.emit('send data', msg);
    });
   
});



