var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});

var userDb = [];

server.on("connection", function(obj){

  var user = {userName: "", userObj: obj};
  userDb.push(user);

  user.userObj.on("message", function(message) {

    if (user.userName === "") {
      user.userName = message.trim();
    }

    else {

      var msg = message.trim("\n");

      userDb.forEach(function(object) {
        if (object.userObj !== obj) {
          object.userObj.send(msg);
        }
      });
    }
  });

  user.userObj.on("close", function() {
    var x = userDb.indexOf(user.userObj);
    userDb.splice(x,1);
    user.userObj.close();
  });

});
