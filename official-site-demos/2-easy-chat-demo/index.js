const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

app.get('/', function(req, res){
  res.sendFile(path.resolve(__dirname, './index.html'));
});

io.on('connection', function(socket) {
  console.log('a user connected');

  socket.on('chat-msg', function(data) {
  	// 给所有人发射一个事件，在客户端监听
  	console.log('typed something');
  	io.emit('chat-msg', data)
  })

  socket.on('disconnect', function() {
  	console.log('a user disconnected');
  })
})

http.listen(3000, function(){
  console.log('listening on *:3000');
});