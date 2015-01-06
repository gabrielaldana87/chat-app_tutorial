var WebSocket = require("ws");
var ws = new WebSocket("ws://localhost:3000");

ws.on("open",function()
{
  console.log("Connected to server.");
});
