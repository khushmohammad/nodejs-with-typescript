import { Http2ServerRequest, Http2ServerResponse } from "http2";

var http = require("http");
http
  .createServer(function (
    request: Http2ServerRequest,
    response: Http2ServerResponse
  ) {
   response.write("<h1>hello</h1>");
    response.end("Hello World");
  })
  .listen(8081);

console.log("Server running at http://127.0.0.1:8081/");
