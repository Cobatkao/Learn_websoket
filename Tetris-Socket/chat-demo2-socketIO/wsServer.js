const app = require('http').createServer()
const io = require('socket.io')(app);

const PORT = 9000
let count = 0

app.listen(PORT);

console.log('WebSocket Server is listenning on port ' + PORT)

io.on('connection', function (socket) {
  console.log("New connection Established...")
  
  count++
  socket.username = 'USER ' + count

  // 广播信息
  io.emit('enter', `${socket.username} comes in...`)

  // 响应事件
  socket.on('message', function(data) {
    console.log('data', data)
    io.emit('message', `${socket.username} says ${data}`)
  })

  socket.on('disconnect', function() {
    console.log('Server has disconnected')
    io.emit('leave', `${socket.username}  left...`)
  })
})