const wsServer = require('nodejs-websocket')

const PORT = 9000
let count = 0

console.log('WebSocket Server is listenning on port ' + PORT)

var server = wsServer.createServer(function (conn) {
  console.log("New connection...")
  count++
  conn.username = 'user' + count
  
  const msg = {}
  msg.type = 'enter'
  msg.data = conn.username + ' comes in...'
  console.log(msg)
  console.log(JSON.stringify(msg))

  broadcast(JSON.stringify(msg)) // 字符串类型发送

  // Emitted when a text is received.
  conn.on("text", function (str) {
    console.log("Received " + str)
    const msg = {}
    msg.type = 'message'
    msg.data = conn.username + ' says ' +  str
    broadcast(JSON.stringify(msg))
  })
  conn.on("close", function (code, reason) {
    console.log("Connection closed")
    const msg = {}
    msg.type = 'leave'
    msg.data = conn.username + ' left...'
    broadcast(JSON.stringify(msg))
  })
  conn.on("error", function(err) {
    console.log('handle Error')
    console.log(err)
  })
}).listen(PORT)

function broadcast(str) {
  //An Array with all connected clients. It's useful for broadcasting a message:
  server.connections.forEach(conn => {
    conn.sendText(str)
  });
}