import http, { Server } from "http";
const port = 8080;
const server: Server = http.createServer(function (req, res) {
  res.write("welcome");
  res.end();
});

server.listen(port);
console.log("server started :http://localhost:8080");
