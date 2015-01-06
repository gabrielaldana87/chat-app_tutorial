var ws = new WebSocket("ws://localhost:3000");

ws.on("open",function()
{
  console.log("Connected to server.");
  ws.send("client connected!");
});

ws.on("message", function(data)
{
  console.log(data);
})
