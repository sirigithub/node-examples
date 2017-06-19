var express = require('express'),
    wsio= require('websocket.io')

/*
create express app
*/

var app =express.createServer();

var ws = wsio.attach(app);

app.use(express.static('public'));
/**
Listening on a connection
**/
ws.on("connection",function(socket) {
    console.log("connected");
    socket.on('message', function(msg) {
        console.log("in socket message"+msg);
        socket.send('pong');
        
    });
});

/**
* Listen
**/
app.listen(3000);