var
    io = require('socket.io-client'),
    ioClient = io.connect('http://localhost:9300');

setInterval(function() {

	var data = {
		x: Math.floor(Math.random() * 10),
		y: Math.floor(Math.random() * 10),
		status: true
	}

	ioClient.emit('message', data);

}, 1000);

ioClient.on('message', function(msg) {

    console.info(msg);

});