var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});

var userDb = [];

server.on("connection", function(obj){
  userDb.push(obj);

  obj.on("message", function(message) {
    var msg = message.trim("\n");

    userDb.forEach(function(object) {
      if (object !== obj) {
        object.send(msg);
      }
    });
  });

  obj.on("close", function() {
    var x = userDb.indexOf(obj);
    userDb.splice(x,1);
    obj.close();
  });

});
