import { Http2ServerRequest, Http2ServerResponse } from "http2";

const http = require("http");
var dt = require('./myfirstmodule');


http
  .createServer(function (req:Http2ServerRequest, res:Http2ServerResponse) {
    res.write("hello");
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
  })
  .listen(8080);

  console.log("server listening on port : 8080");