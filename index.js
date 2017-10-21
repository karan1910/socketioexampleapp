var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile('D:/MyProjects/socketioexampleapp/index.html');
});

io.on('connection', function(socket) {
    socket.on('chat msg', function(msg){
        console.log('message: ' + msg);
        io.emit('chat msg', msg);
    });
    console.log('a user connected');
});

http.listen(process.env.PORT || 3000, function(){
    console.log("started");
});
