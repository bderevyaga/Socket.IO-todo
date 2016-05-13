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

	socket.on('cwach', function (msg) {

		for(var index in data)
		{
			data[msg].status = false;
		}

		data[msg].status = true;
		socket.emit('message', data);

	});

	socket.on('iCwach', function (msg) {

		for(var index in data)
		{
			data[msg].status = false;
		}

		data[socket.id].status = true;
		socket.emit('message', data);

	});

});

