var
    io = require('socket.io'),
    ioServer = io.listen(9300);

var data = {};

ioServer.on('connection', function(socket) {
    
    console.info('New client connected (id=' + socket.id + ').');
    socket.emit('message', socket.id);

    socket.on('disconnect', function() {

        console.info('Client gone (id=' + socket.id + ').');
        delete data[socket.id];

    });

	socket.on('message', function (msg) {

		data[socket.id] = msg;
		socket.emit('message', data);

	});
});

