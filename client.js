var
    io = require('socket.io-client'),
    ioClient = io.connect('http://localhost:9300');

var positionX = 0;
var positionY = 300;
var mowe = true;

setInterval(function() {

	if(positionX >= 1024){
		mowe = false;
	}else if(positionX <= 1) {
		mowe = true;
	}

	if(mowe){
		positionX++;
	}else{
		positionX--;
	}
	var data = {
		x: positionX,
		y: positionY,
		status: false
	}

	ioClient.emit('message', data);

}, 1000);

ioClient.on('message', function(msg) {

    console.info(msg);

});
