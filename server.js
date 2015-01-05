var http = require( "http" );
var fs = require( "fs" );
var server = http.createServer( function ( request, response )
{
  var path = request.url;
  var handle = path.split("/");
  console.log( request.url );

  if(path==="/" || path==="/homepage" || path==="/favicon.ico")
    {
      fs.readFile("tutorial.html", function(err,data)
      {
        var convert = data.toString();
        response.end(convert);
      })
    }

      if(path==="/main.css")
        {
          fs.readFile("./main.css", function(err,data)
          {
            var convert = data.toString();
            response.end(convert);
          })
        }
            })
            server.listen( 3000 );
