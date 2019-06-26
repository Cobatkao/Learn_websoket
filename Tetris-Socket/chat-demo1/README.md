### 简单的聊天功能

**WebSocket**

允许浏览器和服务器建立持久连接，并且服务器可以向客户端主动发送消息

- chat-demo-1 

通过WebSocket发送消息，服务端通过nodejs-websocket实现websocket server，接收，返回消息。

- chat-demo-2

其实，demo1中将消息包装成对象，然后通过JSON序列化，反序列化等等过程统统可以交给框架来做，所以用socket.io重新实现WebSocket，相比demo1有以下
优势：

- `emit('event_name', {hello: 'world'})`：可直接发送对象，不用像demo1中自己构造对象，序列化；

- `on('any_event')`：可以自定义监听任何事件类型；