**简单的聊天功能**

- chat-demo-1 

通过WebSocket发送消息，后端通过nodejs-websocket开启服务器，接收，返回消息。

- chat-demo-2

demo1中将消息包装成对象，然后通过JSON序列化，反序列化等等过程统统可以交给框架来做，所以用socket.io重新实现

- `emit('event_name', {hello: 'world'})`：可直接发送对象，不用像demo1中自己构造对象，序列化；

- `on('any_event')`：可以自定义监听任何事件类型；