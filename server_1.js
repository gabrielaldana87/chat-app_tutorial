var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});

server.on("connection", function(obj){

  obj.on("message", function(message) {
    obj.send(message)
  });

});
